import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Login from "./pages/login";
import DashboardMenu from "./components/dashboardMenu";

function App() {
  return (
    <div className="App flex bg-gray">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact={true}>
            <DashboardMenu name="Guillermo Paez" />
          </Route>
          <Route path="*" exact component={Error404} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
