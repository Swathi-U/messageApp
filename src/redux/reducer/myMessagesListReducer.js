const myMessageListInitialState = []
const myMessageListReducer = (state=myMessageListInitialState,action)=>{
    switch(action.type){
        case 'MY_MESSAGELIST':{
            return action.payload
        }
        default :{
            return state
    }
}
}
export default myMessageListReducer