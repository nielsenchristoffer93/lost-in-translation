import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Startup() {
  const history = useHistory();
  const handleClick = () => history.push("/translation");

  return (
    <main className="Startup">
      <Container>
        <Row className="center-row">
          <Col xs={3}></Col>
          <Col xs={6}>
            <Row>
              <Col xs={3} className="icon-col">
              <span class="material-icons-sharp icon">translate</span>
              </Col>
              <Col xs={9}>
                  <h1>Lost in Translation</h1>
                  <p>Get started</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="input-container">
                  <FormControl className="input"
                    placeholder="What's your name?"
                    aria-label="username"
                    aria-describedby="basic-addon"
                  />
                  <Button
                    variant="dark"
                    id="button-addon"
                    onClick={handleClick}
                  >
                    <span class="material-icons-sharp">arrow_forward</span>
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </main>
  );
}

export default Startup;
