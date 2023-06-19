import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"; 
import thunk from "redux-thunk";
import appReduser from "./appReduser";
import authReduser from "./authReduser";
import dialogsReduser from './dialogsReduser';
import usersReduser from "./usersReduser";
import profileReduser from './profileReduser';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  app: appReduser,
  auth: authReduser,
  dialogs: dialogsReduser,
  users: usersReduser,
  profile: profileReduser,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

// let store = createStore(reducers, applyMiddleware(thunk));

export default store;