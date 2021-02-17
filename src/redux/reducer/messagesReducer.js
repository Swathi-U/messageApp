const messagesInitialState = {}
const messagesReducer = (state=messagesInitialState,action)=>{
    switch(action.type){
        case 'CREATE_MESSAGE':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default messagesReducer