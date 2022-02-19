import { SELECT } from './actions';

export function createAction(payload) {
  return {
    type: SELECT,
    payload,
  };
}
