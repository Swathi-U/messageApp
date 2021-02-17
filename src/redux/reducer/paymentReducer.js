const paymentInitialState = {}
const paymentReducer = (state=paymentInitialState,action)=>{
    switch(action.type){
        case 'CREATE_PAYMENT':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default paymentReducer