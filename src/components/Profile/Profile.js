import { Button, Card } from "react-bootstrap";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";

function Translation() {
  return (
    <main className="Translation">
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          <Button variant="dark">Clear Translations</Button>
        </div>
        <Card className="card-container">
          <Card.Header>Word</Card.Header>
          <Card.Body>
            <img
              className="sign-img"
              src={`/resources/individial_signs/${"c"}.png`}
              alt="a.png"
            />
          </Card.Body>
        </Card>
        <Card className="card-container">
          <Card.Header>Word</Card.Header>
          <Card.Body>
            <img
              className="sign-img"
              src={`/resources/individial_signs/${"e"}.png`}
              alt="a.png"
            />
          </Card.Body>
        </Card>
        <Card className="card-container">
          <Card.Header>Word</Card.Header>
          <Card.Body>
            <img
              className="sign-img"
              src={`/resources/individial_signs/${"d"}.png`}
              alt="a.png"
            />
          </Card.Body>
        </Card>
      </CenterContainer>
    </main>
  );
}

export default Translation;
