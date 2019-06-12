import React , {Component} from 'react'

class LoginModalComponent extends Component {

  render(){
    return(
      <div className="form">
        <form>
          <h2>Sign in</h2>
          <input type="text" placheholder="Email*"/>
          <input type="password" placheholder="Password*"/>
        </form>
      </div>
    )
  }
}

export default LoginModalComponent
