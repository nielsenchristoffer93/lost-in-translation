import { Col, Row } from "react-bootstrap";
import CenterContainer from "./CenterContainer";

function NavBar() {
  return (
    <nav>
      <CenterContainer>
        <Row>
          <Col xs={9}>
            <a href="/">
              <h5>Lost in Translation</h5>
            </a>
          </Col>
          <Col xs={3} className="username-container">
            <Row>
              <Col xs={8}>
                <a href={"/profile"}>
                  <p>Username</p>
                </a>
              </Col>
              <Col xs={2}>
                <a href={"/profile"}>
                  <span class="material-icons-sharp">account_circle</span>
                </a>
              </Col>
              <Col xs={2}>
                <a href={"/"}>
                  <span class="material-icons-sharp">logout</span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </CenterContainer>
    </nav>
  );
}
export default NavBar;
