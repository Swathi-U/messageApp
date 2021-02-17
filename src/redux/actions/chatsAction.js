import axios from 'axios'
export const setCreateChat=(chat)=>{
    return{type:'CREATE_CHAT',payload:chat}
}
export const startGetCreateChat =(formData)=>{
    return(dispatch)=>{
        axios.post("http://localhost:3075/chats/new",formData,{
            headers :{
                'Authorization' : `${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const chat = response.data
            console.log(chat)
            dispatch(setCreateChat(chat))
        })
    }
}

export const setChat=(chat)=>{
    return{type:'CHAT',payload:chat}
}
export const startGetChat =(id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3075/chats/${id}`,{
            headers :{
                'Authorization' : ` ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const chat = response.data
            console.log(chat)
            dispatch(setChat(chat))
        })
    }
}

export const setUpdateChat=(chat)=>{
    return{type:'UPDATE_CHAT',payload:chat}
}
export const startGetUpdateChat =(id,formData)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3075/chats/${id}`,formData,{
            headers :{
                'Authorization' : ` ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const chat = response.data
            console.log(chat)
            dispatch(setUpdateChat(chat))
        })
    }
}