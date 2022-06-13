import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigationbar from "./components/nav/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/layout/landing/Home";
//import Register from "./components/auth/Register";
//import Login from "./components/auth/Login";
//import RegisterPage from "./components/layout/RegisterPage";
//import LoginPage from "./components/layout/LoginPage";
import DashboardContainer from "./components/layout/DashboardContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigationbar colour="dodgerblue" />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} /> */}
          <Route exact path="/dashboard" component={DashboardContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
