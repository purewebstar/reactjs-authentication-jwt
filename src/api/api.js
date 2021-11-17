import { setLocalStorage, getLocalStorage, clearLocalStorage } from "../utils/Storage";
import axios from "axios";

const refreshToken = getLocalStorage('refreshToken')?getLocalStorage('refreshToken'): '';
//const accessToken = getLocalStorage('accessToken');
const apiUri = 'https://api.abraham-mitiku.com/';
export const registerUser = async(data)=>{
    return await (
        axios.post(`${apiUri}register`,{
            username: data.username,
            password: data.password
        }).then(res=>{
          if(res.status === 201){
            return true;
          }
          else return res.data.message;
        }).catch(err=>{
            return 'User Exist!';
        })
    )
}

export const loginUser = async(data)=>{
    return await (
        axios.post(`${apiUri}login`,{
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
                return res.data.message;
            }
        }).catch(err=>{
            return 'Username or Password incorrect!';
        })
    )
}

export const renewAccessToken = async()=>{
    return await (
        axios.put(`${apiUri}renew/access-token`,{
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
