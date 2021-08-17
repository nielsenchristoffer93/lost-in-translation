import { useHistory } from "react-router-dom";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

function Profile() {
    const history = useHistory();
    const handleClick = () => history.push('/translation');
    const handleClickLogOut = () => history.push('/'); //delete data too
    return(
        <main className="Profile">
            <h1>This is the user page</h1>
            <Button variant="primary" onClick={handleClick}>Translate again</Button>
            <Button variant="primary" onClick={handleClickLogOut}>Logout</Button>

        </main>
    );
}
export default Profile