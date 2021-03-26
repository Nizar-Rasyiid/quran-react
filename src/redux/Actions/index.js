import axios from 'axios'

export const UserLogin = (url,payload) => {
    return (dispatch)=>{    

        return axios.post(url,payload)
        .then( (response) => {
            let data = response.data
            localStorage.setItem("token", response.data.token)
            dispatch(login(data))
        })

        .catch((error)=>{
            console.log(error.response)
        })
    }
}

// export const counterIncrement = () => {
//     return {
//         type : "INCREMENT"
//     }
// }
// export const counterDecrement = () => {
//     return {
//         type: "Decrement"
//     }
// }

export const login = (data) => {
    return{
        type : "LOGIN",
        auth : true,
        data : data
    }
}

export const logout = () => {
    return {
        type : "LOGOUT",
        auth : false,
        name:""
    }
}