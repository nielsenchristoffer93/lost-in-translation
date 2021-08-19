import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import {useEffect, useState} from "react";

import NavBar from "../shared/NavBar";
import CenterContainer from "../shared/CenterContainer";
import NavBarUser from "../shared/NavBarUser";
import CardTranslation from "../shared/CardTranslation";
import { getStorage } from "../../storage"
import {Redirect, useHistory} from "react-router-dom";

function Translation(){
  const history = useHistory();
  const [stringToTranslate, setStringToTranslate] = useState("");
  const [inputString, setInputString] = useState("");
  let [shouldRedirect, setShouldRedirect] = useState(false);

  let [showCardTranslation, setShowCardTranslation] = useState(false);

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

  function displayCardTranslations() {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
  }

  function postTranslationToDatabase() {
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
        {/*<Card className="card-container">
          <Card.Header>
            <p>{stringToTranslate}</p>
          </Card.Header>
          <Card.Body>
            {displaySignImages()}
            {letterArray.map((char) => (
              //<img src={i} alt={i + ".png"}></img>
              <SignImage letter={char}></SignImage>
            ))}
          </Card.Body>
        </Card>*/}
      </CenterContainer>
    </main>
  );
}

export default Translation;
