import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { registerUser } from "../../api/api";
import { RegisterUser } from "../../redux/actions";
import $ from 'jquery';
import { useHistory } from "react-router";

const Home = () =>{
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
        let payload = await registerUser(data);
        dispatch(RegisterUser(payload));
        if(payload){
            window.location.href = '/login'
        }else{
            $('input').val('')
            setMsg(payload);
            window.location.href = '/register'
        }
    }

    return(
        <div className="text-center">
           <h1 className="h1-responsive mt-5">Register Page</h1>
           <h4 className="h4-responsive font-weight-bold mt-3 text-danger">
             {msg}
           </h4>
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
                    <button className="btn btn-info" onClick={handleSubmit}>Register</button>
                    </div>
                   </MDBCol>
                   <MDBCol md="3"></MDBCol>
               </MDBRow>
           </MDBContainer>
      </div>
    )
}

export default Home;