import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';

let reducers = combineReducers({
  dialogs: dialogsReduser,
  profile: profileReduser,
});

let store = createStore(reducers);

export default store;