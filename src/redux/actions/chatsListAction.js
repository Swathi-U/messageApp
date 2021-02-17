import axios from 'axios'
export const setChatList=(chatList)=>{
    return{type:'CHAT_LIST',payload:chatList}
}
export const startGetChatList =()=>{
    return(dispatch)=>{
        axios.get("http://localhost:3075/chats",{
            headers :{
                'Authorization' : ` ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const chatList = response.data
            console.log(chatList)
            dispatch(setChatList(chatList))
        })
    }
}