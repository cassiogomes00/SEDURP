export function enterUsername(username) {
  return {
    type: 'ENTER_USERNAME',
    payload: username,
  };
}

export function enterPassword(password) {
  return {
    type: 'ENTER_PASSWORD',
    payload: password,
  };
}
