import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import chatsListReducer from '../reducer/chatsListReducer'
import chatReducer from '../reducer/chatsReducer'
import userRegisterReducer from '../reducer/userRegisterReducer'
import userLoginReducer from '../reducer/userLoginReducer'
import messagesReducer from '../reducer/messagesReducer'
import messageListReducer from '../reducer/messageListReducer'
import myMessageListReducer from '../reducer/myMessagesListReducer'
import paymentReducer from '../reducer/paymentReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        userRegister : userRegisterReducer,
        userLogin : userLoginReducer,
        chatsList : chatsListReducer,
        chat : chatReducer,
        messageList : messageListReducer,
        messages : messagesReducer,
        myMessagesList : myMessageListReducer,
        payment : paymentReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore