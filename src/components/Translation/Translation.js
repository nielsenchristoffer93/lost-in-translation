import { useHistory } from "react-router-dom";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function Translation() {
    const history = useHistory();
    const handleClick = () => history.push('/Profile');
    return (
        <main className="Translation">
            <h1>This is the translation page.</h1>
            <Button variant="primary" onClick={handleClick}>Go to Profile </Button>
        </main>
    );
}

export default Translation