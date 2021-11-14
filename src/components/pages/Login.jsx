import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { loginUser } from "../../api/api";
import { LoginUser } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Login = () =>{

    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = async()=>{
        const data = {
            username: username,
            password: password
        }
        console.log(data)
        let payload = await loginUser(data);
        dispatch(LoginUser(payload));
    }
 
    const isLogged = useSelector(state => state.isLogged);
   
    React.useEffect(()=>{
        if(isLogged){
           window.location.href = '/dashboard'
           setMsg('success, redirecting ...')
        }
    })

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
           <div className="text-center">
              <h4 className="text-danger font-weight-bold"> {msg}</h4>
           </div>
      </div>
    )
}

export default Login;