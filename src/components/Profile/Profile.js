import { useHistory } from "react-router-dom";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";


function Profile() {
    const history = useHistory();
    const handleClick = () => history.push('/translation');
    const handleClickLogOut = () => history.push('/'); //delete data too
    return(
        <main className="Profile"><Container>
        <Row>
            <Col></Col>
            <Col>
        
                <Row>
                
                    <Col>Icon</Col>
                    <Col>Welcome phrase</Col>
                </Row>
                <Row>
                    <Col>
                       <h2>User Translation history</h2> 
                    </Col>
                </Row>
                <Row>
                    <Button variant="primary" onClick={handleClick}>Translate again</Button>
                    
                </Row>

            </Col>
            <Col>
            <Button variant="primary" onClick={handleClickLogOut}>Logout</Button>
            </Col>
        </Row>

    </Container>
            
            

        </main>
    );
}
export default Profile