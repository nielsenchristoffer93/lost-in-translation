import { Row, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useState } from "react";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import SignImage from "./SignImage";
import CardTranslation from "../hoc/CardTranslation";
import { getStorage } from "../../storage"

function Translation() {
  const [stringToTranslate, setStringToTranslate] = useState("");
  const [inputString, setInputString] = useState("");

  const [showCardTranslation, setShowCardTranslation] = useState(false);

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
      }).then((response) => {
        //do something awesome that makes the world a better place
        console.log(response);
      });
  }


  return (
    <main className="Translation">
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
            />
            <Button
              variant="dark"
              id="stringToTranslate"
              onClick={handleTranslateStringClick}
            >
              <span class="material-icons-sharp">arrow_forward</span>
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
