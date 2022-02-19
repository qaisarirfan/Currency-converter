import { LOGIN, LOGOUT } from './actions';

export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
