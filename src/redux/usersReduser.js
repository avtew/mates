import { updateObject } from '../utils/objectHelper';
import { usersAPI, followAPI } from './../api/api';

let initialState = {
  users: [],
  withPhoto: false,
  userQnt: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
}

const SET_USER_QNT = 'mates/usersReduser/SET_USER_QNT';
const TOGGLE_ISFETCHING = 'mates/usersReduser/TOGGLE_ISFETCHING';
const SET_USERS = 'mates/usersReduser/SET_USERS';
const SET_CURRENT_PAGE = 'mates/usersReduser/SET_CURRENT_PAGE';
const SET_NEW_USERS = 'mates/usersReduser/SET_NEW_USERS';
const FOLLOW = 'mates/usersReduser/FOLLOW';
const UNFOLLOW = 'mates/usersReduser/UNFOLLOW';

export const setUserQnt = (number) => {
  return {
    type: SET_USER_QNT,
    userQnt: number,
  }
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_ISFETCHING,
    isFetching,
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page,
  }
};

export const setNewUsers = (users) => {
  return {
    type: SET_NEW_USERS,
    users,
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  }
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  }
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_QNT:
      return {
        ...state, userQnt: action.userQnt
      }
    case TOGGLE_ISFETCHING:
      return {
        ...state, isFetching: action.isFetching
      }
    case SET_USERS:
      return {
        ...state, users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_NEW_USERS:
      return {
        ...state, users: [...state.users, ...action.users]
      }
    case FOLLOW:
      return {
        ...state,
        users: updateObject(state.users, action.userId, "id", {followed: true}),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObject(state.users, action.userId, "id", {followed: false}),
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

const toggleFollow = async (dispatch, id, apiMethod, actionCreator) => {
  let response = await apiMethod(id);
  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }
}

export const followUser = (id) => {
  return async (dispatch) => {
    toggleFollow(dispatch, id, followAPI.follow.bind(followAPI), follow)
  }
}

export const unfollowUser = (id) => {
  return async (dispatch) => {
    toggleFollow(dispatch, id, followAPI.unfollow.bind(followAPI), unfollow)
  }
}

export default usersReduser;