import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import {SignImage} from "./index";

const CardTranslation = (props) => {

    const [letterArray, setLetterArray] = useState([]);
    //Normalizes the string to be translated to better match the individual images supplied
    useEffect(() => {
        setLetterArray(props.stringToTranslate.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(""))
    }, [props.stringToTranslate]);
    //Itereates over the string to be translated and retrieves the specific character to be translated
    const displaySignImages = () => {
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
}
export default CardTranslation