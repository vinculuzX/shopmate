import React from 'react';
import { ProductsTotal} from '../models/ProductsCheckoutModel';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {stateModal,chooseModal} from '../store/modal/actions'
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
  openModal = (state , component) => {
    const {stateModal,chooseModal} = this.props;
    stateModal(state);
    chooseModal(component);
  }
  render(){

    return(
      <div className="header">
        <div className="header__actionShop">
          <div className="header__actionShop--start">
              <div className="actionUser">
                <span onClick={this.openModal.bind(this,true,'signin')}><b>Hi!</b> Sign in</span>
                <span onClick={this.openModal.bind(this,true,'signup')}><b>or</b> Register</span>
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
const mapDispatchToProps = dispatch =>
  bindActionCreators({ stateModal , chooseModal }, dispatch);

export default connect (null,mapDispatchToProps)(HeaderComponent)
