import { Row, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useState } from "react";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import SignImage from "./SignImage";

function Translation() {
  //let letterArray = [];
  let listOfSignImages = [];

  const [stringToTranslate, setStringToTranslate] = useState("");

  const [letterArray, setLetterArray] = useState([]);

  const onInputChange = (event) => {
    setStringToTranslate(event.target.value);
  };

  const handleTranslateStringClick = () => {
    console.log(stringToTranslate);
    setLetterArray(stringToTranslate.toLowerCase().split(""));
    //letterArray = stringToTranslate.stringToTranslate.toLowerCase().split("");
    console.log(letterArray);
    //displaySignImages();
  };

  function displaySignImages() {
    //let listOfSignImages = []

    letterArray.forEach((char) => {
      //listOfSignImages.push(<SignImage letter={char}></SignImage>);
      listOfSignImages.push(
        <img
          className="sign-img"
          src={`/resources/individial_signs/${char}.png`}
          alt={`${char}.png`}
        />
      );
    });

    //console.log(listOfSignImages);
    //return listOfSignImages;
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
        <Card className="card-container">
          <Card.Header>
            <p>{stringToTranslate}</p>
          </Card.Header>
          <Card.Body>
            {/*displaySignImages()*/}
            {letterArray.map((char) => (
              //<img src={i} alt={i + ".png"}></img>
              <SignImage letter={char}></SignImage>
            ))}
          </Card.Body>
        </Card>
      </CenterContainer>
    </main>
  );
}

export default Translation;
