
const initialState = {
    login: {}
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGIN_USER': 
           return{
               ...state,
               login: action.payload
           }
        default:
            return state;
    }
};

export default userReducer;