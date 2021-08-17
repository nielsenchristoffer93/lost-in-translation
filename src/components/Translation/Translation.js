
import { Row, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import { useHistory } from "react-router-dom";


function Translation() {
  const history = useHistory();
    const handleClick = () => history.push('/Profile');
    const handleClickTranslate = () => console.log("TRANSLATED"); //placeholder
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
              placeholder="What would you like to translate?"
              aria-label="text-to-translate"
              aria-describedby="basic-addon"
            />
            <Button variant="dark" id="button-addon">
              <span class="material-icons-sharp">arrow_forward</span>
            </Button>
          </InputGroup>
        </Row>
        <Card className="card-container">
          <Card.Header><p>Word</p></Card.Header>
          <Card.Body>
            <img
              className="sign-img"
              src={`/resources/individial_signs/${"c"}.png`}
              alt="a.png"
            />
          </Card.Body>
        </Card>
         <Button variant="primary" onClick={handleClick}>Go to Profile </Button>
         <Button variant="primary" onClick={handleClickTranslate}>Translate </Button>
      </CenterContainer>
    </main>
  );

}

export default Translation;
