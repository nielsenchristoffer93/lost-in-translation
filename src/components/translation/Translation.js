import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import {useEffect, useState} from "react";
import { getStorage } from "../../storage"
import {Redirect} from "react-router-dom";
import {NavBar , CenterContainer, NavBarUser, CardTranslation} from "../shared/index"

const Translation = () => {
  const [stringToTranslate, setStringToTranslate] = useState("");
  const [inputString, setInputString] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showCardTranslation, setShowCardTranslation] = useState(false);

  useEffect(()=> {
    if(!getStorage("username") || getStorage("username") === ""){
      setShouldRedirect(true);
    }
  },[])

  const onInputChange = (event) => {
    setStringToTranslate(event.target.value);
  };

  const handleTranslateStringClick = () => {
    setInputString(stringToTranslate)
    setShowCardTranslation(true);
    postTranslationToDatabase();
  };

  const displayCardTranslations = () => {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
  }

  const postTranslationToDatabase = () => {
      fetch("http://localhost:3000/translations", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: getStorage("username"),
          phrase: stringToTranslate,
          isDeleted: false
        }),
      }).catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <main className="Translation">
      {shouldRedirect ? <Redirect to="/"></Redirect> : null}
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <Row>
          <InputGroup>
            <FormControl
              className="input"
              id="stringToTranslate"
              placeholder="What would you like to translate?"
              aria-label="text-to-translate"
              aria-describedby="basic-addon"
              onChange={onInputChange}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  handleTranslateStringClick();
                }}}
            />
            <Button
              variant="dark"
              id="stringToTranslate"
              onClick={handleTranslateStringClick}
            >
              <span className="material-icons-sharp">arrow_forward</span>
            </Button>
          </InputGroup>
        </Row>
        {showCardTranslation ? displayCardTranslations() : null}
      </CenterContainer>
    </main>
  );
}

export default Translation;
