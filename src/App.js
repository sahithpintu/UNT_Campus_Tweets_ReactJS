// Root component of the application

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';
import Profile from "./Profile";
import UserProfile from './UserProfile';
import LandingPage from './LandingPage';
import ChangePassword from "./ChangePassword";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route> 
          <Route path="/twitter" exact component={Home}></Route>
          <Route path="/twitter/register" exact component={Registration}></Route>
          <Route path="/twitter/login" exact component={Login}></Route>
          <Route path="/logout" exact component={Logout}></Route>
          <Route path="/twitter/user" exact component={Profile}></Route>
          <Route path="/twitter/user/:userName" exact component={UserProfile}></Route>
          <Route path="/twitter/user/:userName/change-password" exact component={ChangePassword}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
