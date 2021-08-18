import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { setStorage } from "../../storage";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from "../../store/user";


function Startup() {
  const [userName, setName] = useState('');
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addUser(userName))
    setName('');
  };

  const history = useHistory();
  /*const [username, setUsername] = useState({
    username: ""
  });*/

  const onInputChange = (event) => {
    /*setUsername({
        [event.target.id]: event.target.value
      })*/
    setStorage("username", event.target.value);
  };

  const handleGoToTranslationClicked = () => {
    // Check if user exists in database, if it does, go to translation page.
    // If it doesn't, add it to the database.
    history.push("/translation");
  };

  return (
    <main className="Startup">
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
                  <FormControl
                    onSubmit ={handleSubmit}
                    className="input"
                    id="username"
                    placeholder="Redux Name?"
                    aria-label="username"
                    aria-describedby="basic-addon"
                    onChange={e => setName(e.target.value)}
                    value ={userName}
                  />
                  <Button
                    variant="dark"
                    id="button-addon"
                    onClick={handleGoToTranslationClicked}
                  >
                    <span class="material-icons-sharp">arrow_forward</span>
                  </Button>
                  <Button
                  variant="dark"
                  id="button-addon"
                  onClick={
                      () => dispatch(addUser(userName))
                      //handleGoToTranslationClicked
                      
                    }
                  >
                    REDUX
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
