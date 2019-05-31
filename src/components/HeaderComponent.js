import React from 'react';
class HeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount:0,
      isModal:false
    }
  }
  openModalSignin = () => {
    return this.setState({isModal:true})
  }
  openModalRegister = () => {
    return this.setState({isModal:true})
  }
  render(){
    return(
      <div className="header">
        <div className="header__actionShop">
          <div className="header__actionShop--start">
              <div className="actionUser">
                <span onClick={this.openModalSignin}><b>Hi!</b>Sign in</span>
                <span onClick={this.openModalRegister}><b>or</b>Register</span>
              </div>
          </div>
          <div className="header__actionShop--center">
            <div className="actionInformation">
              <span><a>Daily Deal</a></span>
              <span><a>Sell</a></span>
              <span><a>Help & Contact</a></span>
            </div>
          </div>
          <div className="header__actionShop--end">
            <div className="actionBuy">
              <span>Currency</span>
              <span>{this.state.amount}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HeaderComponent
