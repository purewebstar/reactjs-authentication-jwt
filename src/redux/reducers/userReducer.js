
const initialState = {
    isLogged: false,
    user_data: null
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case "LOGIN_USER":
            return{
                ...state,
                isLogged: action.payload
            }
        case "USER_DATA":
            return{
                ...state,
                user_data: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;