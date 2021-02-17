import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'
import {startGetChatList} from '../src/redux/actions/chatsListAction'
import { startGetMessageList } from './redux/actions/messageListAction'

const store = configureStore()

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(startGetChatList())
store.dispatch(startGetMessageList())

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById("root"))
