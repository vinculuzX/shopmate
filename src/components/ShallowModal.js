import React  from 'react'

class ShallowModal extends React.Component {
  constructor(){

  }
  render(){
    return(
      <div class="modal">
          <div class="modal__header">
              <button>X</button
          </div>
          <div class="modal__content">
            {this.props.children}
          </div>
      </div>
    )
  }
}
export default ShallowModal
