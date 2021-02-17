const messageListInitialState = []
const messageListReducer = (state=messageListInitialState,action)=>{
    switch(action.type){
        case 'MESSAGE_LIST':{
            console.log(action.payload)
            return [...action.payload]
        }
        default :{
            return state
    }
}
}
export default messageListReducer