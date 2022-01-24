const DEFAULT_USERNAME = 'admin';
const DEFAULT_USERPWD = 'admin';

export default function doLogin(user) {
  const { username, password } = user;
  if (username !== DEFAULT_USERNAME) {
    throw new Error('A conta não existe!');
  }

  if (password !== DEFAULT_USERPWD) {
    throw new Error('Dados incorretos!');
  }

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.Xs1l2H7ui_yqE-GlQ2GARQ5ZpjuS8B8xQaooy89Q8y8';
}
