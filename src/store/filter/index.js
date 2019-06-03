import {SEARCH_FILTER,SELECT_NAV_FILTER} from './types'

const initialState = {
  nav:'',
  input:''
}

export const searchInputReducer = (state = initialState, action) =>{
  switch (action.type) {
    case SEARCH_FILTER:
    return{
      ...state,
      input:action.input
    }
    default:
      return state

  }
}
