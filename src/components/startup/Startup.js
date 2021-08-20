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
  //Checks if a user exists in the curent session, if they do not then the setRedirect flag is set to true
  const checkIfUserExistInSessionStorage = () => {
    if (getStorage("username")) {
      setShouldRedirect(true);
    }
  }
  // Checks if the current user already exists within the database, so that duplicates are not created
  const  checkIfUsernameExistInListOfUserObjects = () => {
    let exists = false;

    users.forEach((user) => {
      exists = user.name === username ? true : false;
    });

    return exists;
  }
  //Retrieves user data from the database and applies a check to see if the new user alraedy exists
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    checkIfUserExistInSessionStorage();
  }, []);
  //Saves to storage the string data that the user inputs into the input field as their username
  const onInputChange = (event) => {
    setUsername(event.target.value);
    setStorage("username", event.target.value);
  };
  //Checks whether the user is saved to the database, then if true sends them to the translation page, otherwise they are redirected back to starpage
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
