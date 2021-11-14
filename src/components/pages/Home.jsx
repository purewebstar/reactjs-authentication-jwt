import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../api/api";
import { RegisterUser } from "../../redux/actions";

const Home = () =>{
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = async()=>{
        const data = {
            username: username,
            password: password
        }
        let payload = await registerUser(data);
        dispatch(RegisterUser(payload));
    }
 
    const isRegistered = useSelector(state => state.registered);
   
    React.useEffect(()=>{
        if(isRegistered){
           window.location.href = '/login'
        }
    })
   
    return(
        <div className="text-center">
           <h1 className="h1-responsive">Register Page</h1>
           <MDBContainer>
               <MDBRow>
                   <MDBCol md="3"></MDBCol>
                   <MDBCol md="6" className="mt-5">
                   <input 
                        type="text" className="form-control"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <input 
                        type="password" className="form-control mt-1"
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleSubmit}>Register</button>
                   </MDBCol>
                   <MDBCol md="3"></MDBCol>
               </MDBRow>
           </MDBContainer>
      </div>
    )
}

export default Home;