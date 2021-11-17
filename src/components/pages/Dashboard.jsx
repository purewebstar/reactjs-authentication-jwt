import React from "react";
import { logout } from "../../api/api";

const Dashboard = () =>{

    const handleLogout = ()=>{
       logout();
       window.location.href = '/';
    }
   
    return(
        <div className="text-center">
           <h1 className="h1-responsive">Dashboard Page</h1>

           <h3 className="h3-responsive text-danger">Authorized Page!</h3>
           <button className="btn btn-danger float-right"
            onClick={handleLogout}
           >
               Logout
           </button>
      </div>
    )
}

export default Dashboard;