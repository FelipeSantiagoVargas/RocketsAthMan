import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Error404 from "./pages/error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
