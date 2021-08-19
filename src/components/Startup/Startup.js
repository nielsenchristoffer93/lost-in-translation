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

function Startup() {
  let [username, setUsername] = useState("");
  let [users, setUsers] = useState([]);
  let [shouldRedirect, setShouldRedirect] = useState(false);

  function checkIfUserExistInSessionStorage() {
    if (getStorage("username")) {
      setShouldRedirect(true);
      /*users.forEach((user) => {
        if (userName === user.name) {
          setShouldRedirect(true);
        }
      });*/
    }
  }

  function checkIfUsernameExistInListOfUserObjects() {
    let exists = false;

    users.forEach(user => {
      exists = (user.name === username) ? true : false;
    });

    return exists;
  }

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      //.then(checkIfUserExistInSessionStorage)

    checkIfUserExistInSessionStorage();
  }, []);

  /*
  useEffect(() => {
    setUserName(getStorage("username"))
  }, [])
  */

  const onInputChange = (event) => {
    setUsername(event.target.value);
    setStorage("username", event.target.value);
  };

  const handleGoToTranslationClicked = () => {
    // Check if user exists in database, if it does, go to translation page.
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
        console.error('Error:', error);
      });
    }
    // If it doesn't, add it to the database.
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
                  <FormControl
                    className="input"
                    id="username"
                    placeholder="What's your name?"
                    aria-label="username"
                    aria-describedby="basic-addon"
                    onChange={onInputChange}
                  />
                  <Button
                    variant="dark"
                    id="button-addon"
                    onClick={handleGoToTranslationClicked}
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
