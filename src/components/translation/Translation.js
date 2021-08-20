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
    //Checks if user is logged in or if username is blank, if no user is logged in then setRedirect flag becomes true
  useEffect(()=> {
    if(!getStorage("username") || getStorage("username") === ""){
      setShouldRedirect(true);
    }
  },[])
  //Sets the string to be translated to the value inputted by user in the input 
  const onInputChange = (event) => {
    setStringToTranslate(event.target.value);
  };
  //Handles the onClick event so that the input string is stored, the translation will be shown, posted of data can occur, and the succesful post alert is triggered
  const handleTranslateStringClick = () => {
    setInputString(stringToTranslate)
    setShowCardTranslation(true);
    postTranslationToDatabase();
    setPostSuccessful(true);
  };
  //Displays the translation images based upon the input 
  const displayCardTranslations = () => {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
  }
  //Posts the translation data to the translation database
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
