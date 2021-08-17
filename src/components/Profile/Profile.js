
import { Button, Card } from "react-bootstrap";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import { useHistory } from "react-router-dom";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function Profile() {
  return (
    <main className="Profile">
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
        <Button variant="primary" onClick={handleClick}>Translate again</Button>
        <Button variant="primary" onClick={handleClickLogOut}>Logout</Button>
      </CenterContainer>
    </main>
  );
}

export default Profile;

