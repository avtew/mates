import { usersAPI, followAPI } from './../api/api';

let initialState = {
  users: [],
  withPhoto: false,
  userQnt: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
}

export const setUserQnt = (number) => {
  return {
    type: 'SET-USER-QNT',
    userQnt: number
  }
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: 'TOGGLE-ISFETCHING',
    isFetching
  }
};

export const setUsers = (users) => {
  return {
    type: 'SET-USERS',
    users,
  }
};

export const setCurrentPage = (page) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage: page,
  }
};

export const setNewUsers = (users) => {
  return {
    type: 'SET-NEW-USERS',
    users,
  }
};

export const follow = (userId) => {
  return {
    type: 'FOLLOW',
    userId
  }
};

export const unfollow = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId
  }
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-QNT':
      return {
        ...state, userQnt: action.userQnt
      }
    case 'TOGGLE-ISFETCHING':
      return {
        ...state, isFetching: action.isFetching
      }
    case 'SET-USERS':
      return {
        ...state, users: [...action.users]
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state, currentPage: action.currentPage
      }
    case 'SET-NEW-USERS':
      return {
        ...state, users: [...state.users, ...action.users]
      }
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }
    default:
      return state;
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(response => {
      dispatch(toggleIsFetching(false));
      dispatch(setUserQnt(response.totalCount));
      dispatch(setUsers(response.items));
    })
  }
}

export const getNewUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then(response => {
      dispatch(toggleIsFetching(false));
      dispatch(setUserQnt(response.totalCount));
      dispatch(setNewUsers(response.items));
    })
  }
}

export const followUser = (id) => {
  return (dispatch) => {
    followAPI.follow(id).then(response => {
      if (response.resultCode === 0) {
        dispatch(follow(id));
      }
    })
  }
}

export const unfollowUser = (id) => {
  return (dispatch) => {
    followAPI.unfollow(id).then(response => {
      if (response.resultCode === 0) {
        dispatch(unfollow(id));
      }
    })
  }
}

export default usersReduser;