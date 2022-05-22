import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigationbar from "./components/nav/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import RegisterPage from "./components/layout/RegisterPage";
import LoginPage from "./components/layout/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigationbar colour="dodgerblue" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
