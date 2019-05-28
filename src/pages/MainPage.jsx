import React , {Component} from 'react'

class MainPage extends Component{
  constructor(){

  }
  render(){
    return(
      <header>
        <div className="header">
          <div className="header__actionStore"><div>
        </div>
      </header>
      <nav>
        <div className="nav">
          <div className="nav__navigationShop"></div>
        </div>
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
        <div className="footer">
          <div className="footer__navigationShop"></div>
          <div className="footer__socialMedia"></div>
          <div className="footer__infoShop"></div>
        </div>
      <footer>
    )
  }
}

export default MainPage
