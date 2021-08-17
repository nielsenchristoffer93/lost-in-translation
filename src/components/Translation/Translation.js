import { useHistory } from "react-router-dom";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function Translation() {
    const history = useHistory();
    const handleClick = () => history.push('/Profile');
    const handleClickTranslate = () => console.log("TRANSLATED"); //placeholder
    return (
        <main className="Translation">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Row>
                            <Col>Icon</Col>
                            <Col>This is the translation page.</Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <FormControl
                                        placeholder="Translate something cool "
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Button variant="primary" onClick={handleClickTranslate}>Translate </Button>
                        
                        </Row>

                    </Col>
                    <Col>
                    <Button variant="primary" onClick={handleClick}>Go to Profile </Button>
                    </Col>
                </Row>

            </Container>
            <h1></h1>
            
        </main>
    );
}

export default Translation