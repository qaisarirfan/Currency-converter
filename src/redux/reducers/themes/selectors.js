import get from "lodash/get"
import {createSelector} from "reselect"
import {reducerName} from "./actions"

export const selectThemes = (state) => get(state, `${reducerName}.themes`)
export const selectDefaultTheme = (state) =>
  get(state, `${reducerName}.default`)
export const selectStyleableTheme = createSelector(
  selectThemes,
  selectDefaultTheme,
  (themes, defaultColor) => {
    return themes[defaultColor]
  }
)
