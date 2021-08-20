import {Card} from "react-bootstrap";
import {useState, useEffect} from "react";
import {SignImage} from "./index";

/**
 * CardTranslation (component) for displaying word to be translated and all sign-images based on letters in word.
 *
 * @returns CardTranslation component
 */
const CardTranslation = (props) => {
    const [letterArray, setLetterArray] = useState([]);

    /**
     * Normalizes the string to be translated to better match the individual images supplied.
     */
    useEffect(() => {
        setLetterArray(
            props.stringToTranslate
                .replace(/[^a-zA-Z ]/g, "")
                .toLowerCase()
                .split("")
        );
    }, [props.stringToTranslate]);

    /**
     * Itereates over the string to be translated and retrieves the specific character to be translated
     *
     * @returns Array of SignImage components.
     */
    const displaySignImages = () => {
        let listOfSignImages = [];
        for (let i = 0; i < letterArray.length; i++) {
            listOfSignImages.push(<SignImage key={i} letter={letterArray[i]}></SignImage>);
        }
        return listOfSignImages;
    };

    return (
        <Card className="card-container">
            <Card.Header>
                {/* "non-translated" word to be displayed */}
                <p>{props.stringToTranslate}</p>
            </Card.Header>
            {/* All sign-images to be displayed */}
            <Card.Body>{displaySignImages()}</Card.Body>
        </Card>
    );
};
export default CardTranslation;
