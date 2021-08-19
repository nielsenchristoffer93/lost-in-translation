import { Row, InputGroup, FormControl, Button, Alert } from "react-bootstrap";
import {useEffect, useState} from "react";
import { getStorage } from "../../storage"
import {Redirect} from "react-router-dom";
import {NavBar , CenterContainer, NavBarUser, CardTranslation} from "../shared/index"

const Translation = () => {
  const [stringToTranslate, setStringToTranslate] = useState("");
  const [inputString, setInputString] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showCardTranslation, setShowCardTranslation] = useState(false);
  const [postSuccessful, setPostSuccessful] = useState(false);

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
    setPostSuccessful(true);
  };

  const displayCardTranslations = () => {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
  }

  const postTranslationToDatabase = () => {
      fetch("https://json-server-lfgn.herokuapp.com/translations", {
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
        setPostSuccessful(false);
      });
  }

  return (
    <main className="Translation">
      {shouldRedirect ? <Redirect to="/"></Redirect> : null}
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        {postSuccessful ? <Alert variant="success">
          Post successful!
        </Alert>: null}
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
