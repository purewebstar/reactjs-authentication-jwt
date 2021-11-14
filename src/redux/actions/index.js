
export const Authorized = (payload)=>{
   return{
       type: 'AUTHORIZED',
       payload: payload
   }
}

export const AccessTokenRenewed = (payload)=>{
    return{
        type: 'ACCESS_TOKEN_RENEWED',
        payload: payload
    }
}

export const RegisterUser = (payload) =>{
    return{
        type: 'REGISTER_USER',
        payload: payload
    }
}

export const LoginUser = (payload) =>{
    return{
        type: 'LOGIN_USER',
        payload: payload
    }
}

