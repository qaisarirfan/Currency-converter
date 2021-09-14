import {createReducer} from "../../utility"
import {SELECT} from "./actions"
import {ERROR, LOADED, LOADING} from "../../middleware/actions"

// REDUCERS initial state
export const initialState = {
  data: null,
  loader: false,
  loadingError: null,
}

// REDUCERS Reducer
const reducers = {
  [SELECT + LOADING](state) {
    return {
      ...state,
      data: null,
      loadingError: null,
      loader: true,
    }
  },

  [SELECT + LOADED](state, payload) {
    return {
      ...state,
      data: payload,
      loader: false,
    }
  },

  [SELECT + ERROR](state, payload) {
    return {
      ...state,
      data: null,
      loader: false,
      loadingError: payload,
    }
  },
}

export default createReducer(reducers, initialState)
