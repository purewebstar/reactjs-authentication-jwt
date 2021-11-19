import React from "react";
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import { renewAccessToken} from './api/api';
import { getLocalStorage } from "./utils/Storage";

const App = () =>{

  const authorize = async()=>{
    await renewAccessToken();
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
