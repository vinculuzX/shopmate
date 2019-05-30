import React  from 'react';
import { Route, Switch , BrowserRouter as Router} from "react-router-dom"

import  HeaderComponent from '../components/HeaderComponent';
import  NavigationComponent from '../components/NavigationComponent';
import  FooterComponent  from '../components/FooterComponent';

import CheckoutPage from './CheckoutPage';
import ProductPage from './ProductPage';
import ProductsListPage from './ProductsListPage';


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
      return(
          <div>
            <header>
              <HeaderComponent/>
            </header>
            <nav>
              <NavigationComponent/>
            </nav>
            <main>
              <div className="content">
                <Router>
                  <Switch>
                      <Route exact path="/" component={ProductsListPage}/>
                      <Route path="/product/:productId" component={ProductPage}/>
                      <Route path="/checkout" component={CheckoutPage}/>
                  </Switch>
                </Router>
              </div>
            </main>
            <footer>
              <FooterComponent/>
            </footer>
          </div>
        )
     }
  }

export default MainPage
