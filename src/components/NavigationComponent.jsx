import React , {Component} from 'react'

class NavigationComponent extends Component {
  render(){
    return(
      <div className="navigation">
        <div className="navigation__list">
            <h3>Title</h3>
            <ul>
              <li><a href="1">Women</a><li>
              <li><a href="2">Men</a><li>
              <li><a href="3">Kid</a><li>
            </ul>
        </div>
        <div className="navigation__actionBuy">
          <div className="search">
            <input type="text" placheholder="search anything"/>
          </div>
          <div className="bag">
            <i></i><span>6<span>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationComponent
