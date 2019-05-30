import React from 'react';

class HeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount:0
    }
  }
  render(){
    return(
      <div className="header">
        <div className="header__actionShop">
          <div className="header__actionShop--start">
              <div className="actionUser">
                <span><b>Hi!</b> Sign in</span>
                <span><b>or</b>Register</span>
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
              <span>{this.props.render(this.state.amount)}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HeaderComponent
