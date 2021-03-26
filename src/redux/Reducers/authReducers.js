const defaultState = {
    data:  [],
    auth : false,
}

const authReducers = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return{
                ...state,
                data : action.data,
                auth : action.auth,
            }    

            break;
        case "LOGOUT":
            return {
                ...state,
                data: action.data,
                auth: action.auth,
            }

            break;
    
        default:
            return{
                ...state
            }
            break;
    }
}
export default authReducers