import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Startup from "./components/Startup/Startup";
import NotFound from "./components/NotFound/NotFound";
import Translation from "./components/Translation/Translation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Lost in Translation</h1>
        <h4>
          <span className="material-icons-round">translate</span>
        </h4>
        <Switch>
          <Route path="/" exact component={ Startup }></Route>
          <Route path="/translation" component= { Translation }></Route>
          <Route path="*" component={ NotFound }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
