import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import SignImage from "../Translation/SignImage";

function CardTranslation(props) {

    const [letterArray, setLetterArray] = useState([]);

    useEffect(() => {
        setLetterArray(props.stringToTranslate.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(""))
    }, [props.stringToTranslate]);

    function displaySignImages() {
      let listOfSignImages = []
  
      letterArray.forEach((char) => {
        listOfSignImages.push(
          <SignImage letter={char}></SignImage>
        );
      });
  
      return listOfSignImages;
    }

    return (
        <Card className="card-container">
          <Card.Header>
            <p>{props.stringToTranslate}</p>
          </Card.Header>
          <Card.Body>
            {displaySignImages()}
          </Card.Body>
        </Card>
    )

} export default CardTranslation