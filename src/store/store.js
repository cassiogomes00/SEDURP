import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { enterLoginInfoReducer as enterLoginInfo } from './EnterLoginInfo/EnterLoginIndo.reducer';
import login from './Login/Login.reducer';

const rootReducer = combineReducers({ enterLoginInfo, login });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
