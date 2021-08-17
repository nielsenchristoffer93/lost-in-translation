import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";



function Startup() {
    const history = useHistory();
    const handleClick = () => history.push('/translation');

    return (

        <main className="Startup">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Row>
                            <Col>Icon</Col>
                            <Col>Welcome phrase</Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <FormControl
                                        placeholder="What's your name bitch? "
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button variant="primary" onClick={handleClick}>Go to translation</Button>
                        </Row>

                    </Col>
                    <Col>
                        --
                    </Col>
                </Row>

            </Container>
        </main>
    )

}




export default Startup