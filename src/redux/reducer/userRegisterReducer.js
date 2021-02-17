const userInitialState = {}
const userReducer = (state=userInitialState,action)=>{
    switch(action.type){
        case 'REGISTER_USER':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default userReducer