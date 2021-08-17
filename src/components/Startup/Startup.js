import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {useEffect, useState} from "react";
import { setStorage, getStorage } from "../../storage";

function Startup() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/users')
        .then(res =>{
          return res.json();
        })
        .then(data => setUsers(data))

      const checkForUser = () =>{
      if(!(getStorage('username') === false)){
        console.log(getStorage('username') === false)
        setUserName(getStorage('username'));
        for (let i = 0; i < users.length ; i++) {
          if(users[i].name === userName){
            history.push("/translation");
            break;
          }
        }
      }
    }
      checkForUser()
  },[])

  const onInputChange = (event) => {
    /*setUsername({
        [event.target.id]: event.target.value
      })*/
    setUserName(event.target.value)
    setStorage("username", event.target.value);

  };

  const handleGoToTranslationClicked = () => {
    // Check if user exists in database, if it does, go to translation page.
    fetch('http://localhost:3000/users', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: getStorage('username')
      })
    })
        .then( (response) => {
          //do something awesome that makes the world a better place
          console.log(response)
        });
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
