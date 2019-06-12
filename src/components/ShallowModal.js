import React  from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {stateModal} from '../store/modal/actions'
class ShallowModal extends React.Component {
  render(){
    const {children , isModal , stateModal} = this.props
    return(
      <div>
        {isModal === true &&
          <div className="modal modal__background">
              <div className="modal__container">
                <div className="modal__header">
                    <button onClick={() => stateModal(false) }>X</button>
                </div>
                <div className="modal__content">
                  {children}
                </div>
              </div>
          </div>
        }
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ stateModal }, dispatch);
const mapStateToProps = store => ({
  isModal:store.stateModal.state
})
export default connect(mapStateToProps,mapDispatchToProps)(ShallowModal)
