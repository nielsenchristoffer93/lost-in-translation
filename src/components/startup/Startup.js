import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { setStorage, getStorage } from "../../storage";

const Startup = () => {
  let [username, setUsername] = useState("");
  let [users, setUsers] = useState([]);
  let [shouldRedirect, setShouldRedirect] = useState(false);

  const checkIfUserExistInSessionStorage = () => {
    if (getStorage("username")) {
      setShouldRedirect(true);
    }
  }

  const  checkIfUsernameExistInListOfUserObjects = () => {
    let exists = false;

    users.forEach((user) => {
      exists = user.name === username ? true : false;
    });

    return exists;
  }

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    checkIfUserExistInSessionStorage();
  }, []);

  const onInputChange = (event) => {
    setUsername(event.target.value);
    setStorage("username", event.target.value);
  };

  const handleGoToTranslationClicked = () => {
    if (!checkIfUsernameExistInListOfUserObjects()) {
      fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
        }),
      }).catch((error) => {
        console.error("Error:", error);
      });
    }
    setShouldRedirect(true);
  };

  return (
    <main className="Startup">
      {shouldRedirect ? <Redirect to="/translation"></Redirect> : null}
      <Container>
        <Row className="center-row">
          <Col xs={3}></Col>
          <Col xs={6}>
            <Row>
              <Col xs={3} className="icon-col">
                <span className="material-icons-sharp icon">translate</span>
              </Col>
              <Col xs={9}>
                <h1>Lost in Translation</h1>
                <p>Get started</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="input-container">
                  <FormControl
                    className="input"
                    id="username"
                    placeholder="What's your name?"
                    aria-label="username"
                    aria-describedby="basic-addon"
                    onChange={onInputChange}
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        handleGoToTranslationClicked();
                      }}}
                    
                  />
                  <Button
                    variant="dark"
                    id="button-addon"
                    onClick={handleGoToTranslationClicked}
                  >
                    <span className="material-icons-sharp">arrow_forward</span>
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
