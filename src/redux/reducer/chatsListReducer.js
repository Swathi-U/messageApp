const chatListInitialState = []
const chatListReducer = (state=chatListInitialState,action)=>{
    switch(action.type){
        case 'CHAT_LIST':{
            console.log(action.payload)
            return [...action.payload]
        }
        default :{
            return state
    }
}
}
export default chatListReducer