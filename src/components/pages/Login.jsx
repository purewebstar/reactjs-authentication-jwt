import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { loginUser } from "../../api/api";
import { LoginUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import $ from 'jquery'

const Login = () =>{
    const history = useHistory();
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = async()=>{
        const data = {
            username: username,
            password: password
        }
        let payload = await loginUser(data);
        dispatch(LoginUser(payload));
        if(payload){
            window.location.href = '/dashboard'
        }else{
            $('input').val('')
            window.location.href = '/login'
        }
    }

    return(
        <div className="text-center">
           <h1 className="h1-responsive mt-5">Login Page</h1>
           <MDBContainer>
               <MDBRow>
                   <MDBCol md="3"></MDBCol>
                   <MDBCol md="6" className="mt-5 border border-info p-4">           
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
                    <button className="btn btn-info" onClick={handleSubmit}>login</button>
                    </div>
                   </MDBCol>
                   <MDBCol md="3"></MDBCol>
               </MDBRow>
           </MDBContainer>
           <div className="text-center">
              <h4 className="text-danger font-weight-bold"> {msg}</h4>
           </div>
      </div>
    )
}

export default Login;