import { Button } from "react-bootstrap";
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

  }, []);


  useEffect(()=> {
    if(!(sessionStorage.getItem('username'))){
      history.push("/")
    }
  },[])





  function displayCardTranslations() {

    let cards = []
    let filteredCards = filterCardTranslations();
    filteredCards.forEach(filteredCard => {
      cards.push(<CardTranslation stringToTranslate={filteredCard.phrase}></CardTranslation>)
    })
    return cards;
  
  }

  function filterCardTranslations() {
    let filteredCards = []
    translations.forEach(translation => {
      if (translation.isDeleted === false) {
        filteredCards.push(translation);
      }
    }); 
    return filteredCards;
  }

  function clearTranslations(){
    let idS = [];
    translations.forEach(translation => idS.push(translation.id))
    idS.forEach(id => patchIsDeleted(id))

    fetch(`http://localhost:3000/translations?username=${getStorage("username")}`)
        .then((response) => response.json())
        .then((data) => setTranslations(data));


  }

  function patchIsDeleted(id){
    fetch(`http://localhost:3000/translations/${id}`, {
    method:'PATCH',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
        },
      body: JSON.stringify({isDeleted: true}),
    }).then(response => response.json())
        .then(json => console.log(json))
  }

  return (
    <main className="Translation">
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          <Button onClick={clearTranslations} variant="dark">Clear Translations</Button>
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
