import {SEARCH_FILTER, SELECT_NAV_FILTER_BY_DEPARTMENT , SELECT_NAV_FILTER_BY_CATEGORY } from './types'

const initialState = {
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

export const selectNavigationFilterReducer = ( state = {} , action) => {
  switch (action.type) {
    case SELECT_NAV_FILTER_BY_DEPARTMENT:
    return{
      ...state,
      department:action.department,
    }
    case  SELECT_NAV_FILTER_BY_CATEGORY:
    return{
      ...state,
      category:action.category
    }
    default:
      return state

  }
}
