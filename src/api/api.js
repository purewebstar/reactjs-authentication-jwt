import { setLocalStorage, getLocalStorage, clearLocalStorage } from "../utils/Storage";
import axios from "axios";

const refreshToken = getLocalStorage('refreshToken')?getLocalStorage('refreshToken'): '';
const accessToken = getLocalStorage('accessToken');
const apiUri = 'http://localhost:4000';

export const registerUser = async(data)=>{
    return await (
        axios.post(`${apiUri}/register`,{
            username: data.username,
            password: data.password
        }).then(res=>{
          if(res.status === 201){
            return true;
          }
          else return res.data.message;
        }).catch(err=>{
            return 'user already exist!';
        })
    )
}

export const loginUser = async(data)=>{
    return await (
        axios.post(`${apiUri}/login`,{
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
            return 'username or password incorrect!';
        })
    )
}

export const renewAccessToken = async()=>{
    return await (
        axios.put(`${apiUri}/renew/access-token`,{
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

export const authRefreshToken = async ()=>{
    return await (
        axios.post(`${apiUri}/refresh-token`,{
            token: refreshToken
        }).then(res=>{
            if(res.status === 200){
                setLocalStorage('isLogged', true)
                return true;
            }
            else{
                setLocalStorage('isLogged', res.false);
                return false;
            }
        }).catch(err=>{
            setLocalStorage('isLogged', false)
            return false;
        })
    )
}

export const getUserData = async ()=>{
    return await (
        axios.get(`${apiUri}/user`,{
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res=>{
            if(res.status === 200){
                return res.data.user;
            }
            else return null;
        }).catch(err=>{
            return null;
        })
    )
}

export const logout = ()=>{
    clearLocalStorage();
}
