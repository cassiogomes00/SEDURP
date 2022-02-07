const initialState = { loading: false, internshipId: null, error: null };

export function registerInternshipReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'REGISTER_INTERNSHIP_STARTED':
      return { ...initialState, loading: true };
    case 'REGISTER_INTERNSHIP_SUCCESS':
      return { ...state, loading: false, internshipId: action.payload };
    case 'REGISTER_INTERNSHIP_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
