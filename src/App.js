import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Startup from "./components/Startup/Startup";
import NotFound from "./components/NotFound/NotFound";
import Translation from "./components/Translation/Translation";
import Profile from "./components/Profile/Profile";

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
