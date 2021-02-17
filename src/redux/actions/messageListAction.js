import axios from 'axios'
export const setMessageList=(messageList)=>{
    return{type:'MESSAGE_LIST',payload:messageList}
}
export const startGetMessageList =()=>{
    return(dispatch)=>{
        axios.get("http://localhost:3075/messages",{
            headers :{
                'Authorization' : ` ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const messageList = response.data
            console.log(messageList)
            dispatch(setMessageList(messageList))
        })
    }
}

