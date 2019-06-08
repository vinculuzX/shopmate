import { SEARCH_FILTER , SELECT_NAV_FILTER_BY_DEPARTMENT,SELECT_NAV_FILTER_BY_CATEGORY} from './types'

export const searchInput = input => ({
  type:SEARCH_FILTER,
  input:input
})

export const selectNavigationFilterDepartment = department => ({
  type:SELECT_NAV_FILTER_BY_DEPARTMENT,
  department,

})

export const selectNavigationFilterCategory = category => ({
  type:SELECT_NAV_FILTER_BY_CATEGORY,
  category
})
