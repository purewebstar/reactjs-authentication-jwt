
const initialState = {
    isAuth: false,
    accessTokenRenewed: false,
    registered: false,
    isLogged: false,
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ACCESS_TOKEN_RENEWED':
            return{
                ...state,
                accessTokenRenewed: action.payload
            }
        case "REGISETER_USER":
            return{
                ...state,
                registered: action.payload
            }
        case "LOGIN_USER":
            return{
                ...state,
                isLogged: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;