const userLoginInitialState = null
const userLoginReducer = (state=userLoginInitialState,action)=>{
    switch(action.type){
        case 'LOGIN_USER':{
            
            console.log(action.payload)
            if(action.payload){
                localStorage.setItem('token',action.payload.token)
                return action.payload
            }else{
                return state
            }
            
        }
        default :{
            return state
    }
}
}
export default userLoginReducer