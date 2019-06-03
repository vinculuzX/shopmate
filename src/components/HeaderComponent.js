import React from 'react';
import { ProductsTotal} from '../models/ProductsCheckoutModel'
import '../styles/scss/components/HeaderComponent.scss';
import gbr from '../assets/images/Icon/gbr.png';
import iconBag from '../assets/images/Icon/icons-bag.png';
class HeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount:0,
      isModal:false
    }
  }
  componentDidMount(){
    this.setState({
      amount:ProductsTotal
    })
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
                <span onClick={this.openModalSignin}><b>Hi!</b> Sign in</span>
                <span onClick={this.openModalRegister}><b>or</b> Register</span>
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
              <span><img src={gbr} alt="currency"/></span>
              <span><img src={iconBag} alt="bag"/> Your Bag <strong> &#163; </strong> {this.state.amount}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HeaderComponent
