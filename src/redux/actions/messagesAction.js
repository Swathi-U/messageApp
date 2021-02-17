import axios from 'axios'
export const setCreateMessage=(message)=>{
    return{type:'CREATE_MESSAGE',payload:message}
}
export const startGetCreateMessage =(formData)=>{
    return(dispatch)=>{
        axios.post("http://localhost:3075/messages/new",formData,{
            headers :{
                'Authorization' : `${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const message = response.data
            console.log(message)
            dispatch(setCreateMessage(message))
        })
    }
}