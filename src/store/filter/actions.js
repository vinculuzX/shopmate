import {SEARCH_FILTER,SELECT_NAV_FILTER} from './types'

export const searchInput  = input => {
  type:SEARCH_FILTER,
  input
}

export const selectNavigationFilter  = nav => {
  type:SEARCH_FILTER,
  nav
}
