const chatInitialState = {}
const chatReducer = (state=chatInitialState,action)=>{
    switch(action.type){
        case 'CREATE_CHAT':{
            console.log(action.payload)
            return action.payload
        }
        case 'CHAT' :{
            console.log(action.payload)
            return action.payload
        }
        case 'UPDATE_CHAT' :{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default chatReducer