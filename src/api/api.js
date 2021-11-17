import { setLocalStorage, getLocalStorage, clearLocalStorage } from "../utils/Storage";
import axios from "axios";

const refreshToken = getLocalStorage('refreshToken')?getLocalStorage('refreshToken'): '';
//const accessToken = getLocalStorage('accessToken');

export const registerUser = async(data)=>{
    return await (
        axios.post(`https://localhost:4000/register`,{data}).then(res=>{
          return true;
        }).catch(err=>{
            return false;
        })
    )
}

export const loginUser = async(data)=>{
    return await (
        axios.post(`http://localhost:4000/login`,{
            username: data.username,
            password: data.password
        }).then(res=>{
            if(res.status === 200){
                setLocalStorage('accessToken', res.data.accessToken);
                setLocalStorage('refreshToken', res.data.refreshToken);
                setLocalStorage('isLogged', true);
                return true;
            }
            else{
                setLocalStorage('isLogged', false);
                return false;
            }
        }).catch(err=>{
            return false;
        })
    )
}

export const renewAccessToken = async()=>{
    return await (
        axios.put(`http://localhost:4000/renew/access-token`,{
            token: refreshToken
        }).then(res=>{
            if(res.status === 201){
                setLocalStorage('accessToken', res.data.accessToken);
                setLocalStorage('isLogged', res.data.status)
                return res.data.status;
            }
            else{
                setLocalStorage('isLogged', res.data.status);
                return false;
            }
        }).catch(err=>{
            setLocalStorage('isLogged', false)
            return false;
        })
    )
}

export const logout = ()=>{
    clearLocalStorage();
}
