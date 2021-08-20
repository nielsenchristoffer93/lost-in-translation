import { Button } from "react-bootstrap";
import{NavBar, CenterContainer, NavBarUser, CardTranslation} from "../shared/index"
import { useState, useEffect } from "react";
import { getStorage } from "../../storage";
import { useHistory, Redirect } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  let [translations, setTranslations] = useState([]);
  let [shouldRedirect, setShouldRedirect] = useState(false);
  //Checks if user is logged in or if username is blank, if no user is logged in then setRedirect flag becomes true
  useEffect(() => {

    if (!getStorage("username") || getStorage("username") === "") {
      setShouldRedirect(true);
    }
    fetchTranslations();
  }, []);
  //Retrieves stored json objects from the translations database, if they match the current user's username and are not "deleted"
   const fetchTranslations = async() => {
    await fetch(
      `http://localhost:3000/translations?username=${getStorage("username")}&isDeleted=false`
    )
      .then((response) => response.json())
      .then((data) => setTranslations(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  //Displays an array of cards, each containing the translated string retrieved from the database
  const displayCardTranslations = () => {
    let cards = [];
    translations.forEach((translation) => {
      cards.push(
        <CardTranslation
          stringToTranslate={translation.phrase}
        ></CardTranslation>
      );
    });
    return cards;
  }
  //Applies a patch to all translations which have a value of "isDeleted = false"
   const clearTranslations = async() => {
    for (let index = 0; index < translations.length; index++) {
      await patchIsDeleted(translations[index].id);
    }
    setTranslations([]);
  }
  //Patches a specific translation based upon it's id, setting "isDeleted" to true
   const patchIsDeleted = async(translationId) => {
    await fetch(`http://localhost:3000/translations/${translationId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(
        { 
          isDeleted: true 
        }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <main className="Translation">
      {shouldRedirect ? <Redirect to="/"></Redirect> : null}
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          <Button onClick={clearTranslations} variant="dark">
            Clear Translations
          </Button>
        </div>
        {displayCardTranslations()}
      </CenterContainer>
    </main>
  );
}

export default Profile;
