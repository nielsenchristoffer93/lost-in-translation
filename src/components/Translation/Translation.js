import { Row, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useState } from "react";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import SignImage from "./SignImage";
import CardTranslation from "../hoc/CardTranslation";

function Translation() {

  const [stringToTranslate, setStringToTranslate] = useState("");
  const [inputString, setInputString] = useState("");

  const [showCardTranslation, setShowCardTranslation] = useState(false);

  //const [letterArray, setLetterArray] = useState([]);

  const onInputChange = (event) => {
    setStringToTranslate(event.target.value);
  };

  const handleTranslateStringClick = () => {
    setInputString(stringToTranslate)
    //setLetterArray(stringToTranslate.toLowerCase().split(""));
    setShowCardTranslation(true);
  };

  /*function displaySignImages() {
    let listOfSignImages = []

    letterArray.forEach((char) => {
      listOfSignImages.push(
        <SignImage letter={char}></SignImage>
      );
    });

    return listOfSignImages;
  }*/

  function displayCardTranslations() {
    return <CardTranslation stringToTranslate={inputString}></CardTranslation>
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
