const initialState = { username: '', password: '' };

export function enterLoginInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ENTER_USERNAME':
      return { ...state, username: action.payload };
    case 'ENTER_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
