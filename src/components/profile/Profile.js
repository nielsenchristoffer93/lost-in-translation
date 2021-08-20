import { Button } from "react-bootstrap";
import { NavBar, CenterContainer, NavBarUser, CardTranslation } from "../shared/index"
import { useState, useEffect } from "react";
import { getStorage } from "../../storage";
import { Redirect } from "react-router-dom";

const Profile = () => {
  let [translations, setTranslations] = useState([]);
  let [shouldRedirect, setShouldRedirect] = useState(false);

  /**
   * React hook running at mount. Will redirect to "/" if username is not set.
   * If username exists (meaning we are at the profile page), fetch translations from database based on username.
   */
  useEffect(() => {

    if (!getStorage("username") || getStorage("username") === "") {
      setShouldRedirect(true);
    }
    fetchTranslations();
  }, []);

  /**
   * Retrieves stored json objects from the translations database, if they match the current user's username and where "isDeleted = false"
   */
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

  /**
   * Displays an array of cards, each containing the translated string retrieved from the database.
   * 
   * @returns Array of CardTranslation components.
   */
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

  /**
   * Applies a patch to all translations which have a value of "isDeleted = false".
   * Changes "isDeleted" to true for all objects that has "isDeleted = false".
   * Will also set the translations to an empty array (because we now want to "hide" all CardTranslation components).
   */
   const clearTranslations = async() => {
    for (let index = 0; index < translations.length; index++) {
      await patchIsDeleted(translations[index].id);
    }
    setTranslations([]);
  }

  //
  /**
   * Patches a specific translation based upon it's id, setting "isDeleted" to true
   * 
   * @param {*} translationId Id of object in database to be patched.
   */
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
      {/* If statement for checking if we should redirect or not */}
      {shouldRedirect ? <Redirect to="/"></Redirect> : null}
      <NavBar>
        <NavBarUser></NavBarUser>
      </NavBar>
      <CenterContainer>
        <div className="d-grid gap-2">
          { /* On button-click call clearTranslations function. */}
          <Button onClick={clearTranslations} variant="dark">
            Clear Translations
          </Button>
        </div>
        {/* Displays CardTranslation components based on what we've fetched. */}
        {displayCardTranslations()}
      </CenterContainer>
    </main>
  );
}

export default Profile;
