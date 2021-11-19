import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { loginUser } from "../../api/api";

const Login = () =>{
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [msg, setMsg] = React.useState(null);
    const handleSubmit = async()=>{
        if(!username || !password || username==='' || password===''){
           setMsg('Input fields are requred!')
        }
        else{
            const data = {
                username: username,
                password: password
            }
            let payload = await loginUser(data);
            if(payload === true){
                window.location.href = '/dashboard'
            }else{
                setMsg(payload)
            }
        }
    }

    return(
        <div className="text-center">
           <h1 className="h1-responsive mt-5 text-success">Login Page</h1>
           <MDBContainer>
               <MDBRow>
                   <MDBCol md="3"></MDBCol>
                   <MDBCol md="6" className="mt-5 border border-success p-4">           
                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text text-left">
                    Your username
                    </label>
                    <input 
                        type="text" className="form-control"
                        onChange={e => setUserName(e.target.value)}
                    />
                     <br />
                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text text-left">
                    Your password
                    </label>
                    <input 
                        type="password" className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="text-center mt-4">
                    <button className="btn btn-success" onClick={handleSubmit}>login</button>
                    <a href="/register" className="font-weight-bold text-info">Register?</a>
                    </div>
                   </MDBCol>
                   <MDBCol md="3"></MDBCol>
               </MDBRow>
           </MDBContainer>
           <div className="text-center">
              <h4 className="text-danger h4-responsive"> {msg}</h4>
           </div>
      </div>
    )
}

export default Login;