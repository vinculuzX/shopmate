import React , {Component} from 'react'
import HeaderComponent , NavigationComponent , FooterComponent from '../components'
class MainPage extends Component{
  constructor(){

  }
  render(){
    return(
      <header>
        <HeaderComponent/>
      </header>
      <nav>
        <NavigationComponent/>
      </nav>
      <main>
        <div className="content">
          <div className="content__banner"></div>
          <div className="content__wrap"></div>
          <div className="content__products"></div>
          <div className="content__subscription"></div>
        </div>
      </main>
      <footer>
        <FooterComponent/>
      <footer>
    )
  }
}

export default MainPage
