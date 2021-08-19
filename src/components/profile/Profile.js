import { Button } from "react-bootstrap";
import{NavBar, CenterContainer, NavBarUser, CardTranslation} from "../shared/index"
import { useState, useEffect } from "react";
import { getStorage } from "../../storage";
import { useHistory, Redirect } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  let [translations, setTranslations] = useState([]);
  let [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {

    if (!getStorage("username") || getStorage("username") === "") {
      setShouldRedirect(true);
    }

    fetchTranslations();
  }, []);

   const fetchTranslations = async() => {
    await fetch(
      `https://json-server-lfgn.herokuapp.com/translations?username=${getStorage("username")}&isDeleted=false`
    )
      .then((response) => response.json())
      .then((data) => setTranslations(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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

   const clearTranslations = async() => {
    for (let index = 0; index < translations.length; index++) {
      await patchIsDeleted(translations[index].id);
    }
    setTranslations([]);
  }

   const patchIsDeleted = async(translationId) => {
    await fetch(`https://json-server-lfgn.herokuapp.com/translations/${translationId}`, {
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