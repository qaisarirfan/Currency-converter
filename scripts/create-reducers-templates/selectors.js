import get from "lodash/get"
import {reducerName} from "./actions"

// REDUCERS selectors
export const selectData = (state) => get(state, `${reducerName}.data`)
export const selectLoader = (state) => get(state, `${reducerName}.loader`)
export const selectLoadingError = (state) =>
  get(state, `${reducerName}.loadingError`)
