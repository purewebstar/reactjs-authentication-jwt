import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserData } from "../../api/api";
import {UserData} from '../../redux/actions/index';

const Dashboard = () =>{
    const dispatch = useDispatch();
    
    const handleLogout = ()=>{
       logout();
       window.location.href = '/';
    }
    const userData = async ()=>{
        let payload = await getUserData();
        dispatch(UserData(payload));
    }

    const user = useSelector(state => state.user_data);
    React.useEffect(()=>{
        userData();
    },[])
   
    return(
        <div className="text-center">
           <h1 className="h1-responsive">Dashboard Page</h1>

           <h3 className="h3-responsive text-success">Welcome {(user)? user._id : ''} !</h3>
           <button className="btn btn-danger float-right"
            onClick={handleLogout}
           >
               Logout
           </button>
      </div>
    )
}

export default Dashboard;