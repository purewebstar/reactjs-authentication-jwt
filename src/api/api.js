import { setLocalStorage, getLocalStorage } from "../utils/Storage";
import axios from "axios";

const refreshToken = getLocalStorage('refreshToken');
//const accessToken = getLocalStorage('accessToken');

export const registerUser = async(data)=>{
    return await (
        axios.post(`https://localhost:4000/register`,{data}).then(res=>{
          if(res.status === 201){
            return true;
          }
          else return false;
        }).catch(err=>{
            return false
        })
    )
}

export const loginUser = async(data)=>{
    return await (
        axios.post(`http://localhost:4000/login`,{data}).then(res=>{
            if(res.status === 200){
                setLocalStorage('accessToken', res.data.accessToken);
                setLocalStorage('refreshToken', res.data.refreshToken);
                return true;
            }
            else return false;
        }).catch(err=>{
            return false;
        })
    )
}

export const renewAccessToken = async()=>{
    const data = {
        token: refreshToken
    }
    return await (
        axios.put(`http://localhost:4000/renew/access-token`,{data}).then(res=>{
            if(res.status == 201){
                setLocalStorage('accessToken', res.data.accessToken);
                return res.data.status;
            }
            else return false;
        }).catch(err=>{
            return false;
        })
    )
}
