import React from "react";
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import { useDispatch } from "react-redux";
import { AccessTokenRenewed } from "./redux/actions";
import {renewAccessToken} from './api/api';
import { getLocalStorage } from "./utils/Storage";

const App = () =>{

  const dispatch = useDispatch();

  const authorize = async()=>{
    let payload = await renewAccessToken();
    dispatch(AccessTokenRenewed(payload))
  }
  const auth = getLocalStorage('isLogged');
  React.useEffect(()=>{
    authorize();
  })
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path='/' component={Home}  exact/>
            <Route path='/home' component={Home} exact />
            <Route path='/login' component={Login} exact/>
            {
              (auth)?
              (
                <Route path='/dashboard' component={Dashboard} exact />
              )
              :
              <Redirect to="/" />
            }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
