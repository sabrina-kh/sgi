import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigationbar from './components/nav/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigationbar />
      <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
