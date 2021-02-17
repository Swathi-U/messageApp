import axios from 'axios'
export const setCreatePayment=(chat)=>{
    return{type:'CREATE_PAYMENT',payload:chat}
}
export const startGetCreatePayment =(formData)=>{
    return(dispatch)=>{
        axios.post("http://localhost:3075/razorpay",formData,{
            headers :{
                'Authorization' : `${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const payment = response.data
            console.log(payment)
            dispatch(setCreatePayment(payment))
        })
    }
}