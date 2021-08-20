import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Startup from "./components/startup/Startup";
import NotFound from "./components/not_found/NotFound";
import Translation from "./components/translation/Translation";
import Profile from "./components/profile/Profile";

/**
 * React-Router is implemented to bring navigation functionality to our application.
 * The app is divided in 3 views: 'Startup', 'Translation' and 'Profile'. A fourth view
 * called 'Not Found' is presented when the user navigates to a wrong path in our application.
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Startup }></Route>
          <Route path="/translation" component= { Translation }></Route>
          <Route path="/profile" component= { Profile }></Route>
          <Route path="*" component={ NotFound }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
