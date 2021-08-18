import { Button, Card } from "react-bootstrap";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import CardTranslation from "../hoc/CardTranslation";

function Translation() {
  return (
    <main className="Translation">
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          <Button variant="dark">Clear Translations</Button>
        </div>
        <CardTranslation stringToTranslate={"Test"}></CardTranslation>
        <CardTranslation stringToTranslate={"Apa"}></CardTranslation>
        <CardTranslation stringToTranslate={"Hejsan"}></CardTranslation>
      </CenterContainer>
    </main>
  );
}

export default Translation;
