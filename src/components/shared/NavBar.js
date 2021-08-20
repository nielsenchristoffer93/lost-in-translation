import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CenterContainer} from "./index";

/**
 * Custom NavBar component.
 * 
 * @param {*} props If we want to add specific children to NavBar (e.g. NavBarUsers component)
 * @returns NavBar component including child components.
 */
const NavBar = (props) => {
  return (
    <nav>
      <CenterContainer>
        <Row>
          <Col xs={9}>
            <Link to="/">
              <h4>Lost in Translation</h4>
            </Link>
          </Col>
          <Col xs={3} className="username-container">
            {/*  */}
            {props.children}
          </Col>
        </Row>
      </CenterContainer>
    </nav>
  );
}
export default NavBar;
