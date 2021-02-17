import React from 'react'
import './chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined, AttachFile, InsertEmoticon, MicOutlined} from '@material-ui/icons'
import {startGetCreateMessage} from '../redux/actions/messagesAction'
import { startGetMessageList } from '../redux/actions/messageListAction'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {startGetCreatePayment} from '../redux/actions/paymentAction'

function loadScript(src){
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
class Chat extends React.Component{
    constructor(){
        super()
        this.state = {
            randomAvatar : Math.floor(Math.random() * 5000),
            message : "",
            isModalOpen : false,
            amount : 0
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetMessageList())
    }
    handlePayment = () =>{
       
            const res = loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
            const formData = {
                amount : this.state.amount
            }
            this.props.dispatch(startGetCreatePayment(formData))
    
            const options = {
                key: 'rzp_test_W0RGiK7OoubFB9',
                currency: this.props.payment.currency,
                amount: this.props.payment.amount,
                order_id: this.props.payment.id,
                name: this.props.chat.username,
                description: 'Thank you for nothing. Please give us some money',
                handler: function (response) {
                    alert(response.razorpay_payment_id)
                    alert(response.razorpay_order_id)
                    alert(response.razorpay_signature)
                },
                prefill: {
                    name : this.props.chat.username,
                    email: "hhhh@gmail.com",
                    phone_number: "9999999999"
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
            
        
    }
    handleModal=()=>{
        this.setState((prevState)=>{
            return{
                isModalOpen : !prevState.isModalOpen
            }
        })

    }
    sendMessage = (e) =>{
        e.preventDefault();
        const formData ={
                    body : this.state.message,
                     name : this.props.user.username,
                     chatId : this.props.chat._id
                }
                this.props.dispatch(startGetMessageList())
                this.props.dispatch(startGetCreateMessage(formData))
                this.props.dispatch(startGetMessageList())
        this.setState({message : ""})
    }
    handleAmountChange=(e)=>{
        const amount = e.target.value
        this.setState({amount})
    }
    handleChange=(e)=>{
        const message = e.target.value
        this.setState({message})
       
    }
    render(){
        return(
            <div className="chat">
                <div className="chat_header">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${this.props.chat._id}.svg`}/>
                    <div className="chat_headerInfo">
                    <h3>{this.props.chat.username}</h3>
                    {/* {this.props.messageList.map((message,index)=>{
                        console.log(this.props.chat._id)
                        if(message.chatId === this.props.chat._id){console.log(index[message.createdAt])
                            var large = index + 1
                            if(message.createdAt<large[message.createdAt]){
                                return(
                                    <p>Last seen at{large[message.createdAt]}</p>
                            )
                            }else{
                                <p>Last seen at{message.createdAt}</p>
                            }
                            
                        }
                        
                    })} */}
                        
                    </div>
                    <div className="chat_headerRight">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile /> 
                        </IconButton>
                        <select onClick={this.handleModal}>
                        <i class="fa fa-ellipsis-v" aria-hidden="true" ></i>
                            <option>pay</option>
                        </select>
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
                <h2>{this.props.chat.username}</h2>
                <h3>Enter Amount</h3>
                <input type="number" value={this.state.amount} onChange={this.handleAmountChange}/>
                <button onClick={this.handlePayment}>Next</button>
                <button onClick={this.handleModal}>Close</button>
                </Modal>
                    </div>
                </div>

                <div className="chat_body">
                    {console.log('messages',this.props.messageList)}
                    <ul>
                    {this.props.messageList.map((message)=>{
                        console.log(this.props.chat._id)
                        if(message.chatId === this.props.chat._id){
                            return(
                                <li key={message._id} className={`chat_message ${this.props.user.username === message.name && "chat_reciever"}`
                                    }><span className="chat_name">{message.name}</span>{message.body}<span className="chat_timestamp">{message.createdAt}</span></li>
                            )
                        }
                        
                    })}
                    </ul>
                    
                </div>

                <div className="chat_footer">
                    <InsertEmoticon/>
                    <form>
                        <input placeholder="Type a message" 
                                type='text'
                                value={this.state.message}
                                onChange={this.handleChange} />
                        <button onClick={this.sendMessage}>Send a message</button>
                    </form>
                    <MicOutlined/>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        chat : state.chat,
        user : state.userLogin,
        messageList : state.messageList,
        payment : state.payment
    }
}
export default connect(mapStateToProps)(Chat)