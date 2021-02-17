import React from 'react'
import {connect} from 'react-redux'
import {startGetMyMessageList} from '../redux/actions/myMessagesListAction'
import './sidebarChat.css'

class LastMessage extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        // console.log(this.props.chatId)
        // this.props.dispatch(startGetMyMessageList(this.props.chatId))
    }
    render(){
        return this.props.myMessages?(
            <div className="sidebarChat_info">
                 {this.props.myMessageList.map((message,index)=>{
                     if(this.props.chatId === message.chatId){
                        if(this.props.myMessageList.length - 1 === index){
                            return(
                                
                                    <p>kkk{message.body}</p>
                               
                            )
                         }
                     }
                     
                    
                })}
            </div>
        ):(
            <div>
                <h1>nn</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        myMessageList : state.myMessageList
    }
}
export default connect(mapStateToProps)(LastMessage)