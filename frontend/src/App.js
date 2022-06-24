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
import Register2 from "./components/auth/Register2";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import setToken from './utils/setToken';
import { useEffect } from "react";
import { getUserData } from "./store/actions/auth.action";
import PrivateRoute from "./components/routing/PrivateRoute";
import UserList from "./components/dashbords/UserList";
import Login from "./components/auth/Login";
import DashboardClient from "./components/DashboardClient";
import DashboardRespVente from "./components/DashboardRespVente";
import DashboardRespStock from "./components/DashboardRespStock";
import DashboardRespReglement from "./components/DashboardRespReglement";
if (localStorage.token) {
	setToken(localStorage.token);
}

function App() {
    useEffect(() => {
			store.dispatch(getUserData());
		}, []); 

  return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="app">
					{/* <Navigationbar colour="dodgerblue" /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register2} />
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/dashboard" component={DashboardAdmin} />
                        <PrivateRoute exact path="/dashboard/client" component={DashboardClient} />
						<PrivateRoute exact path="/dashboard/respvente" component={DashboardRespVente} />
						<PrivateRoute exact path="/dashboard/respstock" component={DashboardRespStock} />
						<PrivateRoute exact path="/dashboard/respreglement" component={DashboardRespReglement} />

						<PrivateRoute exact path="/dashboard/utilisateurs" component={UserList} />
					</Switch>
				</div>
				<ToastContainer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
