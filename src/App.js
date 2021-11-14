import React from "react";
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import axios from "axios";
import { getLocalStorage, setLocalStorage } from "./utils/Storage";

const App = () =>{

  const[auth, setAuth] = React.useState(true)
  
  const refreshToken = getLocalStorage('refreshToken');

  const authorize = async()=>{
    await axios.put('http://localhost:4000/auth/access-token',{
      token: refreshToken
    }).then((res)=>{
        if(res.data.accessToken){
          setLocalStorage('accessToken', res.data.accessToken)
          setAuth(true);
        }
        else{
          setAuth(false)
        }
    }).catch(err=>{
      setAuth(false)
    })
  }

  React.useEffect(()=>{
    authorize();
  },[])
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path='/' component={Home}  exact/>
            <Route path='/home' component={Home} exact />
            <Route path='/login' component={Login} exact/>
            {
              (auth )?
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
