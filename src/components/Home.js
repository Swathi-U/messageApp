import { Button } from '@material-ui/core'
import React from 'react'
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startGetRegisterUser} from '../redux/actions/userRegisterAction'
import {startGetLoginUser} from '../redux/actions/userLoginAction'
import './Home.css'
import '../App.css'
import Sidebar from './sidebar'
import Chat from './chat'

class Home extends React.Component{
    signUpGoogle = (response) => {
        console.log(response);
        const formData = {
            username : response.profileObj.givenName,
            email : response.profileObj.email,
            password : response.profileObj.googleId,
            
        }
        this.props.dispatch(startGetRegisterUser(formData))
        if(this.props.user.email){
            alert("registerd successfully")
        }else{
            alert("registerd already ")
        }

      }
      signInGoogle=(response)=>{
          console.log(response)
          const formData= {
              username : response.profileObj.givenName,
              email : response.profileObj.email,
              password : response.profileObj.googleId,
              imageUrl : response.profileObj.imageUrl
          }
          this.props.dispatch(startGetLoginUser(formData))
      }
    render(){
        return(
            <div>
                {!this.props.user?(
                    <div className='login'>
                    <div className="login_container">
                        <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" alt=""/>
                        <div className="login_text">
                            <h1>Sign in to Razor Message</h1>
                        </div>
                        <Button>
                        <GoogleLogin
                        clientId="571409099736-m46eqhokesf1q0u69mk4nq529npi8117.apps.googleusercontent.com"
                        buttonText="Sign Up With Google"
                        onSuccess={this.signUpGoogle}
                        onFailure={this.signUpGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                        </Button>
                    <Button>
                    <GoogleLogin
                        clientId="571409099736-m46eqhokesf1q0u69mk4nq529npi8117.apps.googleusercontent.com"
                        buttonText="Sign In With Google"
                        onSuccess={this.signInGoogle}
                        onFailure={this.signInGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </Button>
                    </div>
                </div>
                ):(
                    <div className='home_body'>
                        <Sidebar/>
                        <Chat/>
                    </div>
                )}
            </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        user : state.userLogin
    }
}
export default withRouter(connect(mapStateToProps)(Home))