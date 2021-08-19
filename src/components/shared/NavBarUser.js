import { Col, Row } from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";

import { useState, useEffect } from "react";
import { getStorage } from "../../storage";

function NavBarUser() {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(getStorage("username"));
  }, []);

  const LogOut = () =>{
      sessionStorage.clear();
      return <Redirect to="/"/>
  }

  return (
    <Row>
      <Col xs={8}>
        <Link to="/profile">
          <p>{username}</p>
        </Link>
      </Col>
      <Col xs={2}>
        <Link to="/profile">
          <span className="material-icons-sharp">account_circle</span>
        </Link>
      </Col>
      <Col xs={2}>
        <Link to="/">
          <span className="material-icons-sharp" onClick={LogOut}>logout</span>

        </Link>
      </Col>
    </Row>
  );
} export default NavBarUser;
