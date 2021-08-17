import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStorage } from "../../storage";

function NavBarUser() {
  const [username, setUsername] = useState(0);

  useEffect(() => {
    setUsername(getStorage("username"));
  }, []);

  return (
    <Row>
      <Col xs={8}>
        <Link to="/profile">
          <p>{username}</p>
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
  );
}
export default NavBarUser;
