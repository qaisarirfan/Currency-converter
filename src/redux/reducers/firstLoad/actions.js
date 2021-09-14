import {createActionName} from "../../utility"

export const reducerName = "firstLoad"

// Actions
export const LOAD = createActionName(reducerName, "LOAD")
export const SHOW_TUTORIAL = createActionName(reducerName, "SHOW_TUTORIAL")
export const HIDE_TUTORIAL = createActionName(reducerName, "HIDE_TUTORIAL")
