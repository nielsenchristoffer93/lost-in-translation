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

    /**
     * React hook running at mount. Will redirect to "/" if username is not set.
     */
  useEffect(()=> {
    if(!getStorage("username") || getStorage("username") === ""){
      setShouldRedirect(true);
    }
  },[])

  /**
   * Sets the string to be translated to the value inputted by user in the input.
   * 
   * @param {*} event ButtonClick event.
   */ 
  const onInputChange = (event) => {
    setStringToTranslate(event.target.value);
  };

  /**
   * Handles the onClick event so that the input string is stored, the translation will be shown, posted of data can occur, and the succesful post alert is triggered.
   */
  const handleTranslateStringClick = () => {
    setInputString(stringToTranslate)
    setShowCardTranslation(true);
    postTranslationToDatabase();
    setPostSuccessful(true);
  };

  /**
   * Displays the translation images based upon the string(word or sentance from input) to translate. 
   * @returns CardTranslation component based on inputString.
   */
  const displayCardTranslations = () => {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
  }

  /**
   * Posts the translation data to the translation database on the specific user.
   */
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
      {/* If statement for checking if we should redirect or not */}
      {shouldRedirect ? <Redirect to="/"></Redirect> : null}
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        {/* If statement for checking if post request was successfull, if it was, display green alert. */}
        {postSuccessful ? <Alert variant="success">
          Post successful!
        </Alert>: null}
        <Row>
          <InputGroup>
            {/* FormControl, onChange will save input into state and onKeyPress will allow enter click to register string to translate */}
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
        {/* If statement for checking if we should display CardTranslations or not */}
        {showCardTranslation ? displayCardTranslations() : null}
      </CenterContainer>
    </main>
  );
}

export default Translation;
