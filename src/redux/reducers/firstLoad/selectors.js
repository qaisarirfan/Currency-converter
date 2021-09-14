import get from "lodash/get"
import {reducerName} from "./actions"

export const selectIsFirstLoad = (state) =>
  get(state, `${reducerName}.isFirstLoad`)
export const selectShowingTutorial = (state) =>
  get(state, `${reducerName}.showingTutorial`)
