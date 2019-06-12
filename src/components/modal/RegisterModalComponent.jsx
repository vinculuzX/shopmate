import React , {Component} from 'react';
import axios from 'axios';
class RegisterModalComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      formControls:{
        name:{
          value:''
        },
        email:{
          value:''
        },
        password:{
          value:''
        }
      }
    }
  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls:{
        ...this.state.formControls,
        [name]:{
          ...this.state.formControls[name],
          value
        }
      }
    })
  }
  registerSubmit(registerType){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR'
    const config = {
       headers: { Authorization: `Bearer ${token}`}
    }
    console.log(registerType)
    const registerData = {
      name:this.state.formControls.name.value,
      email:this.state.formControls.email.value,
      password:this.state.formControls.password.value
    }
    axios.post('https://backendapi.turing.com/customers', registerData , config).then((res)=>{
      try {

      } catch (e) {
        console.log(e)
      }
    })
  }
  render(){
    return(
      <div className="form">
      <h2>Register</h2>
        <form>
          <input name="name" value={this.state.formControls.name.value} onChange={this.handleChange} type="text" placheholder="Name*"/>
          <input name="email" value={this.state.formControls.email.value} onChange={this.handleChange} type="text" placheholder="Email*"/>
          <input name="password" value={this.state.formControls.password.value} onChange={this.handleChange} type="password" placheholder="Password*"/>
        </form>
        <button type="submit" onClick={this.registerSubmit.bind(this,'email')}>Create User</button>
        <button type="submit" onClick={this.registerSubmit.bind(this,'facebook')}>Facebook</button>
      </div>
    )
  }
}
export default RegisterModalComponent
