import React,{ Component } from 'react';


class LoginView extends Component{
    constructor(props){
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        console.log('Login');
        this.props.history.push('viewDefects');
    }
    render(){
        
        return(
            <div id="login">
            <h1 style={{textAlign:"center"}}> Defect Tracker </h1>
            <div style ={{textAlign:"center"}}>
                <h3 style={{backgroundColor:"#03A9F4",color:"white"}}>Login </h3>
                <label> Username </label>
                <input type = "text" placeholder = "Enter Username"/><br/><br/>
                <label> Password </label>
                <input type = "password" placeholder = "Password"/><br/><br/>
                <button onClick={this.handleLogin}>Sign in</button>
            </div>
            </div>
        );
    }
}
export default LoginView;