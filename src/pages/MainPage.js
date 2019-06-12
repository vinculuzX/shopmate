import React  from 'react';
import { Route, Switch , BrowserRouter as Router} from "react-router-dom"
import { connect } from 'react-redux';

import  HeaderComponent from '../components/HeaderComponent';
import  NavigationComponent from '../components/NavigationComponent';
import  FooterComponent  from '../components/FooterComponent';

import CheckoutPage from './CheckoutPage';
import ProductPage from './ProductPage';
import ProductsListPage from './ProductsListPage';
import ShallowModal from '../components/ShallowModal';
import LoginModalComponent from '../components/modal/LoginModalComponent';
import RegisterModalComponent from '../components/modal/RegisterModalComponent';

function banner(){
  return(
    <div className="content__banner"></div>
  )
}
function subscription(){
  return(
    <div className="content__subscription"></div>
  )
}

class MainPage extends React.Component{
  render(){
    const {chooseModal} = this.props;
      return(
          <Router>
            <div>
              <header>
                <HeaderComponent/>
              </header>
              <nav>
                <NavigationComponent/>
              </nav>
              <main>
                <div className="content">
                    <ShallowModal>
                      { chooseModal.component === 'signin' &&
                        <LoginModalComponent/>
                      }
                      {
                        chooseModal.component === 'signup' &&
                        <RegisterModalComponent/>
                      }
                    </ShallowModal>
                    <Switch>
                        <Route exact path="/" component={ProductsListPage}/>
                        <Route path="/product/:productId" component={ProductPage}/>
                        <Route path="/checkout" component={CheckoutPage}/>
                    </Switch>
                </div>
              </main>
              <footer>
                <FooterComponent/>
              </footer>
            </div>
          </Router>
        )
     }
  }
const mapStateToProps = store => ({
  chooseModal:store.chooseModal
})
export default connect(mapStateToProps)(MainPage)
