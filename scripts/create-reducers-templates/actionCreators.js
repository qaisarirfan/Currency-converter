import {SELECT} from "./actions"

// REDUCERS actions
export function createAction(payload) {
  return {
    type: SELECT,
    payload,
  }
}
