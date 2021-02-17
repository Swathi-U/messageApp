import axios from 'axios'
export const setRegisterUser=(user)=>{
    return{type:'REGISTER_USER',payload:user}
}
export const startGetRegisterUser =(formData)=>{
    return(dispatch)=>{
        axios.post("http://localhost:3075/user/register",formData)
        .then((response)=>{
            const user = response.data
            console.log(user)
            dispatch(setRegisterUser(user))
        })
    }
}

