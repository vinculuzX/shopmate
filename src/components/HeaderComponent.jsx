import React , {Component} from 'react';

class HeaderComponent extends Component {
  constructor(){

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
              <span>Daily Deal</span>
              <span>Sell</span>
              <span>Help & Contact</span>
            </div>
          </div>
          <div className="header__actionShop--end">
            <div className="actionBuy">
              <span>Currency</span>
              <span>Amount:R$16000</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderComponent
