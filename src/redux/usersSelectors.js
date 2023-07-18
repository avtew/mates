export const getUsersSelector = (state) => {
  return state.users.users
}

export const getUserQntSelector = (state) => {
  return state.users.userQnt
}

export const getPageSizeSelector = (state) => {
  return state.users.pageSize
}

export const getCurrentPageSelector = (state) => {
  return state.users.currentPage
}

export const getIsFetchingSelector = (state) => {
  return state.users.isFetching
}