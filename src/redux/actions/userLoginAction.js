import axios from 'axios'

export const setLoginUser=(user)=>{
    return{type:'LOGIN_USER',payload:user}
}
export const startGetLoginUser =(formData)=>{
    return(dispatch)=>{
        axios.post("http://localhost:3075/user/login",formData)
        .then((response)=>{
            const token = response.data
            console.log(token.token)
            dispatch(setLoginUser(token))
        })
    }
}
