import axios from 'axios'

export const setMyMessageList=(myMessageList)=>{
    return{type:'MY_MESSAGELIST',payload:myMessageList}
}
export const startGetMyMessageList =(id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3075/messages/my/${id}`,{
            headers :{
                'Authorization' : ` ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const myMessageList = response.data
            console.log(myMessageList)
            dispatch(setMyMessageList(myMessageList))
        })
    }
}