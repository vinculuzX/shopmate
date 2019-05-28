import React , {Component} from 'react'

class ShallowModal extends Component {
  constructor(){

  }
  render(){
    return(
      <div class="modal">
          <div class="modal__header">
              <button>X</button
          </div>
          <div class="modal__content">
            {props.children}
            // content modal here
          </div>
      </div>
    )
  }
}
export default ShallowModal
