import { setLocalStorage, getLocalStorage } from "../utils/Storage";

export const registerUser = async(data)=>{
    return await (
        axios.post(`https://node.abraham-mitiku.com/register`,{data}).then(res=>{
          return res.data.message
        }).catch(err=>{
            return []
        })
    )
}

export const loginUser = async(data)=>{
    return await (
        axios.post(`https://node.abraham-mitiku.com/register`,{data}).then(res=>{
            const result = {};
            result.accessToken = res.data.accessToken;
            result.refreshToken = res.data.refreshToken;
            return result;
        }).catch(err=>{
            return []
        })
    )
}

export const userData = async(accessToken)=>{
    return await (
        axios.post(`https://node.abraham-mitiku.com/register`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res=>{
            return res.data.message;
        }).catch(err=>{
            return []
        })
    )
}

export const renewAccessToken = async(refreshToken)=>{
    return await (
        axios.post(`https://node.abraham-mitiku.com/register`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        }).then(res=>{
            return res.data.accessToken;
        }).catch(err=>{
            return []
        })
    )
}