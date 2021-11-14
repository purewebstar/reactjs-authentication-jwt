import React from "react";
import axios from 'axios';
import { setLocalStorage } from "../../utils/Storage";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Redirect } from "react-router-dom";

const Login = () =>{

    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async()=>{
        await axios.post('https://node.abraham-mitiku.com/login',{
            username: username,
            password: password
        }).then((res)=>{
            setLocalStorage('accessToken', res.data.accessToken);
            setLocalStorage('refreshToken', res.data.refreshToken);
        }).catch(err=>{
            console.log(err.message)
        })
    }
   
    return(
        <div className="text-center">
           <h1 className="h1-responsive">Login Page</h1>
           <MDBContainer>
               <MDBRow>
                   <MDBCol md="3"></MDBCol>
                   <MDBCol md="6" className="mt-5">
                   <input 
                        type="text" className="form-control"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <input 
                        type="password" className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button className="btn btn-info" onClick={handleSubmit}>login</button>
                   </MDBCol>
                   <MDBCol md="3"></MDBCol>
               </MDBRow>
           </MDBContainer>
      </div>
    )
}

export default Login;