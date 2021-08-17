import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";

function NotFound() {
  return (
    <div>
      <NavBar>
      </NavBar>
      <CenterContainer>
        <h4>Hey you seem lost.</h4>
        <p>This page doesn't exist.</p>
      </CenterContainer>
    </div>
  );
}

export default NotFound;
