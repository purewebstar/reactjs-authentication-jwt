import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { registerUser } from "../../api/api";
import $ from 'jquery';

const Home = () =>{
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!username || !password || username==='' || password===''||
           !firstName || !lastName || firstName===''|| lastName===''
        ){
            setMsg('Input fields are requred!');
        }
        else{
            const data = {
                first_name: firstName,
                last_name: lastName,
                username: username,
                password: password
            }
            let payload = await registerUser(data);
            if(payload === true){
                window.location.href = '/login'
            }else{
                $('input').val('')
                setMsg(payload);
            }
        }
    }

    return(
        <div className="text-center">
           <h1 className="h1-responsive mt-5 text-info">Register Page</h1>
           <MDBContainer>
               <MDBRow>
                   <MDBCol md="3"></MDBCol>
                   <MDBCol md="6" className="mt-5 border border-info p-4">
                   <label htmlFor="defaultFormLoginEmailEx" className="grey-text text-left">
                    First-name
                    </label>
                    <input 
                        type="text" className="form-control"
                        onChange={e => setFirstName(e.target.value)}
                    />
                   <label htmlFor="defaultFormLoginEmailEx" className="grey-text text-left mt-2">
                    Last-name
                    </label>
                    <input 
                        type="text" className="form-control"
                        onChange={e => setLastName(e.target.value)}
                    />
                   <label htmlFor="defaultFormLoginEmailEx" className="grey-text text-left mt-2">
                    Your username
                    </label>
                    <input 
                        type="text" className="form-control"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text text-left mt-2">
                    Your password
                    </label>
                    <input 
                        type="password" className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="text-center mt-4">
                    <button className="btn btn-info" onClick={handleSubmit}>Register</button>
                    <a href="/login" className="font-weight-bold text-success">Login?</a>
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

export default Home;