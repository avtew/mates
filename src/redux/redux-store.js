import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import thunk from "redux-thunk";
import authReduser from "./authReduser";
import dialogsReduser from './dialogsReduser';
import usersReduser from "./usersReduser";
import profileReduser from './profileReduser';

let reducers = combineReducers({
  auth: authReduser,
  dialogs: dialogsReduser,
  users: usersReduser,
  profile: profileReduser,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;