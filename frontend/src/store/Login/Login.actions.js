import doLogin from '../../services/loginService';

export function login(user) {
  return (dispatch) => {
    dispatch(loginStarted());

    try {
      const token = doLogin(user);
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
}

function loginStarted() {
  return { type: 'LOGIN_STARTED' };
}

function loginSuccess(token) {
  return { type: 'LOGIN_SUCCESS', payload: token };
}

function loginFailure(message) {
  return { type: 'LOGIN_FAILURE', payload: message };
}
