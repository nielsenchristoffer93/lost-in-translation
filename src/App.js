import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Startup from "./components/startup/Startup";
import NotFound from "./components/not_found/NotFound";
import Translation from "./components/translation/Translation";
import Profile from "./components/profile/Profile";

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
