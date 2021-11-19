
const initialState = {
    isLogged: false,
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
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