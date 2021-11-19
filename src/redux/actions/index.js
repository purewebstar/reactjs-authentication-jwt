
export const LoginUser = (payload) =>{
    return{
        type: 'LOGIN_USER',
        payload: payload
    }
}

export const UserData = (payload) =>{
    return{
        type: 'USER_DATA',
        payload: payload
    }
}