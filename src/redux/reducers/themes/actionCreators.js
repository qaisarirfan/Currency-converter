import {SELECT_THEME} from "./actions"

export function createChangeThemeAction(payload) {
  return {
    type: SELECT_THEME,
    payload,
  }
}
