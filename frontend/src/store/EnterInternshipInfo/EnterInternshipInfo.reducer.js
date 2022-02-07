const initialState = {};

export function enterInternshipInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ENTER_INTERNSHIP_INFO':
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    default:
      return state;
  }
}
