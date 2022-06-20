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
import Register from "./components/auth/Register";
//import Login from "./components/auth/Login";
//import RegisterPage from "./components/layout/RegisterPage";
//import LoginPage from "./components/layout/LoginPage";
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardAdmin from "./components/dashbords/DashbordAdmin";
import { Provider } from "react-redux";
import {store} from "./store"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        {/* <Navigationbar colour="dodgerblue" /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route exact path="/dashboard" component={DashboardAdmin} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
