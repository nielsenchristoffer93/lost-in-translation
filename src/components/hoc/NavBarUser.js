import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarUser() {

    return (
        <Row>
              <Col xs={8}>
                <Link to="/profile">
                  <p>Username</p>
                </Link>
              </Col>
              <Col xs={2}>
                <Link to="/profile">
                  <span class="material-icons-sharp">account_circle</span>
                </Link>
              </Col>
              <Col xs={2}>
                <Link to="/">
                  <span class="material-icons-sharp">logout</span>
                </Link>
              </Col>
        </Row>
    )

} export default NavBarUser