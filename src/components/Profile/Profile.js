import { Button, Card } from "react-bootstrap";
import NavBar from "../hoc/NavBar";
import CenterContainer from "../hoc/CenterContainer";
import NavBarUser from "../hoc/NavBarUser";
import CardTranslation from "../hoc/CardTranslation";
import { useState, useEffect } from "react";
import { getStorage } from "../../storage";
import {useHistory} from "react-router-dom";

function Profile() {
  const history = useHistory();
  let [translations, setTranslations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/translations?username=${getStorage("username")}`)
      .then((response) => response.json())
      .then((data) => setTranslations(data));

  }, [translations]);

  useEffect(()=> {
    if(!(sessionStorage.getItem('username'))){
      //return <Redirect to="/"/>
      history.push("/")
    }
  },[])


  function displayCardTranslations() {
    let cards = []
    translations.forEach(translation => {
      cards.push(<CardTranslation stringToTranslate={translation.phrase}></CardTranslation>);
    });
    return cards;
  }

  return (
    <main className="Translation">
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          <Button variant="dark">Clear Translations</Button>
        </div>
        {displayCardTranslations()}
        {/*<CardTranslation stringToTranslate={"Test"}></CardTranslation>
        <CardTranslation stringToTranslate={"Apa"}></CardTranslation>
        <CardTranslation stringToTranslate={"Hejsan"}></CardTranslation>*/}
      </CenterContainer>
    </main>
  );
}

export default Profile;
