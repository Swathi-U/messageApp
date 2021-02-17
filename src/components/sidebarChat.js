import { Avatar } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetCreateChat} from '../redux/actions/chatsAction'
import {startGetChatList} from '../redux/actions/chatsListAction'
import {startGetChat} from '../redux/actions/chatsAction'
import {startGetMessageList} from '../redux/actions/messageListAction'
import {startGetMyMessageList} from '../redux/actions/myMessagesListAction'
import Modal from 'react-modal'
//import LastMessage from './lastMessage'
import './sidebarChat.css'

class SidebarChat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            randomAvatar : Math.floor(Math.random() * 5000),
            isModalOpen : false,
            username : "",
            email : "",
            phoneNumber : ""
        }
    }
    componentDidMount(){
        if(this.props.id){
            this.props.dispatch(startGetMyMessageList(this.props.id))
        }else{

        }
        
    }
    handleChange=(e)=>{
        const amount = e.target.value
        this.setState({amount})
    }
    createChat=(e)=>{
        
        const roomname = prompt('enter the username')
        if(roomname){
            const username = {
                username : roomname
            }
            //this.props.dispatch(startGetChatList())
            this.props.dispatch(startGetCreateChat(username))
            this.props.dispatch(startGetChatList())
        }
        
    }
    handleChat=()=>{
        this.props.dispatch(startGetMessageList(this.props.id))
        this.props.dispatch(startGetChat(this.props.id))
    }
    handleModal=()=>{
        this.setState((prevState)=>{
            return{
                isModalOpen : !prevState.isModalOpen
            }
        })

    }
    render(){
        // console.log(this.props.id)
        // const formData = {
        //     chatId : this.props.id
        // }
        // this.props.dispatch(startGetMyMessageList(formData))

        return !this.props.addNewChat?(
            <Link to={`/chats/${this.props.id}`}>
                <div className="sidebarChat" onClick={this.handleChat}>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${this.state.randomAvatar}.svg`}/>
                
                 <div className="sidebarChat_info">
                    <h2>{this.props.username}</h2>
                    
                    {/* <React.Fragment>
                <div>
                {this.props.myMessageList?this.props.myMessageList.map((message,index)=>{
                    if(this.props.id === message.chatId){
                        if(this.props.myMessageList.length -1 === index){
                            return(
                                <p>jjj{message.body}</p>
                             )
                        }
                    }
                   
                    
                }):""}
                </div>
            </React.Fragment>
                 */}
                </div>
            </div>
            </Link>
        ):(
            <div onClick={this.handleModal} className="sidebarChat">
                 <h2>Add New Chat</h2>
                 <Modal isOpen={this.state.isModalOpen} onRequestClose={this.handleModal}
                style={{
                    overlay: {
                        background: 'grey',
                    },
                    content: {
                      color : 'orange'
                    }
                  }}
                  >
                    <h2>Enter User Details</h2>
                    <h2>Username : </h2>
                    <input type="number" value={this.state.username} onChange={this.handleAmountChange}/>
                <h2>{this.props.chat.username}</h2>
                <h3>Enter </h3>
                <input type="number" value={this.state.amount} onChange={this.handleAmountChange}/>
                <button onClick={this.createChat}>create user</button>
                <button onClick={this.handleModal}>Close</button>
                </Modal>
             </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        chat : state.chat,
        user : state.userLogin,
        messageList : state.messageList,
        myMessageList : state.myMessageList
    }
}

export default connect(mapStateToProps)(SidebarChat)