import {CHOOSE_MODAL , STATE_MODAL} from './types';

const initialState = {
  stateModal:false,
  component:''
}

export const stateModalReducer  = (state = initialState , action) => {
  switch(action.type){
    case STATE_MODAL:
    return{
      ...state.stateModal,
      state:action.state
    }
    default:
      return state
  }
}

export const chooseModalReducer  = (state = initialState.component , action) => {
  switch(action.type){
    case CHOOSE_MODAL:
    return{
      ...state.component,
      component:action.component
    }
    default:
      return state
  }
}
