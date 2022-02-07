import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { enterInternshipInfoReducer as enterInternshipInfo } from './EnterInternshipInfo/EnterInternshipInfo.reducer';
import { enterLoginInfoReducer as enterLoginInfo } from './EnterLoginInfo/EnterLoginIndo.reducer';
import login from './Login/Login.reducer';
import { registerInternshipReducer as registerInternship } from './RegisterInternship/RegisterInternship.reducer';

const rootReducer = combineReducers({
  enterLoginInfo,
  login,
  enterInternshipInfo,
  registerInternship,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
