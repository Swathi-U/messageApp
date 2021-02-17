import React from 'react'
import './sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './sidebarChat'
import {startGetChatList} from '../redux/actions/chatsListAction'
import {connect} from 'react-redux'
//import LastMessage from './lastMessage'

class Sidebar extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetChatList())
        
    }
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar_header">
                    {console.log(this.props.user)}
                    <Avatar src={this.props.user.imageUrl?this.props.user.imageUrl:""}/>
                    <div className="sidebar_headerRight">
                        <IconButton>
                            <DonutLargeIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                        
                        
                    </div>
                </div>
                <div className="sidebar_search">
                  <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="search chat" type="text"/>  
                  </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat addNewChat={true}/>
                    {this.props.chatsList.map((chat)=>{
                        return(
                            
                                <SidebarChat key={chat._id}
                                         id={chat._id}
                                         username={chat.username}
                                        
                            />
                           
                                
                           
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        chatsList : state.chatsList,
        user : state.userLogin
    }
}
export default connect(mapStateToProps)(Sidebar)
