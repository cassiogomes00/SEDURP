const initialState = { loading: false, token: null, error: null };

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return { ...initialState, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, token: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
