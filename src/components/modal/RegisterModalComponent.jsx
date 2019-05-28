import React , {Component} from 'react'

class RegisterModalComponent extends Component {

  render(){
    return(
      <div class="form">
      <h2>Register</h2>
        <form>
          <input type="text" placheholder="Name*">
          <input type="text" placheholder="Email*">
          <input type="password" placheholder="Password*">
          <input type="password" placheholder="Confirm Password*">
        </form>
      </div>
    )
  }
}

export default RegisterModalComponent
