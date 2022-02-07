import { registerIntership } from '../../services/internshipRegisterService';

export function registerInternship(internshipInfo) {
  return (dispatch) => {
    dispatch(registerIntershipStarted());

    try {
      const intershipId = registerIntership(internshipInfo);
      dispatch(registerIntershipSuccess(intershipId));
    } catch (error) {
      dispatch(registerIntershipFailure(error.message));
    }
  };
}

function registerIntershipStarted() {
  return { type: 'REGISTER_INTERNSHIP_STARTED' };
}
function registerIntershipSuccess(data) {
  return { type: 'REGISTER_INTERNSHIP_SUCCESS', payload: data };
}
function registerIntershipFailure(error) {
  return { type: 'REGISTER_INTERNSHIP_FAILURE', payload: error };
}
