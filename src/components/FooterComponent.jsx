import React , {Component} from 'react'

class FooterComponent extends Component{
  constructor(){

  }
  render(){
    return(
      <div className="footer">
        <div className="footer__barTop">
            <h3>title</h3>
            <span>x</span>
        </div>
        <div className="footer__list">
            <div className="footer__listCategory">
              <h4>Category Title</h4>
              <br>
              <ul>
                <li>Element 1</li>
                <li>Element 2</li>
                <li>Element 3</li>
                <li>Element 4</li>
                <li>Element 5</li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default FooterComponent
