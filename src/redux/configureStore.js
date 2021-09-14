import {applyMiddleware, compose, createStore} from "redux"
import persistCombineReducers from "redux-persist/lib/persistCombineReducers"
import AsyncStorage from "@react-native-community/async-storage"
import thunk from "redux-thunk"
import createFilter from "redux-persist-transform-filter"
import {logger} from "redux-logger"

import clients from "../configure/clients"
import reducerRegistery from "./ReducerRegistery"
import createApiClient from "./middleware/apiClients"

import authReducer from "./reducers/authentication"
import {reducerName as authReducerName} from "./reducers/authentication/actions"

import firstLoadReducer from "./reducers/firstLoad"
import {reducerName as firstLoadReducerName} from "./reducers/firstLoad/actions"

import userReducer from "./reducers/user"
import {reducerName as userReducerName} from "./reducers/user/actions"

import themesReducer from "./reducers/themes"
import {reducerName as themesReducerName} from "./reducers/themes/actions"

import conversionReducer from "./reducers/conversion"
import {reducerName as conversionReducerName} from "./reducers/conversion/actions"

import languagesReducer from "./reducers/languages"
import {reducerName as languagesReducerName} from "./reducers/languages/actions"

import navigationReducer from "./reducers/navigation"
import {reducerName as navigationReducerName} from "./reducers/navigation/actions"

export const saveAuthFilter = createFilter(authReducerName, ["login"])
export const loadAuthFilter = createFilter(authReducerName, null, ["login"])

export const saveThemesFilter = createFilter(themesReducerName, ["default"])
export const loadThemesFilter = createFilter(themesReducerName, null, [
  "default",
])

export const saveRatesFavFilter = createFilter(conversionReducerName, [
  "favorite",
])
export const loadRatesFavFilter = createFilter(conversionReducerName, null, [
  "favorite",
])

export const saveLangFilter = createFilter(languagesReducerName, ["language"])
export const loadLangFilter = createFilter(languagesReducerName, null, [
  "language",
])

export const saveNavigationFilter = createFilter(navigationReducerName, [
  "navigation",
])
export const loadNavigationFilter = createFilter(navigationReducerName, null, [
  "navigation",
])

const storageConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    authReducerName,
    firstLoadReducerName,
    themesReducerName,
    conversionReducerName,
    languagesReducerName,
    navigationReducerName,
  ],
  transforms: [
    saveAuthFilter,
    loadAuthFilter,
    saveThemesFilter,
    loadThemesFilter,
    saveRatesFavFilter,
    loadRatesFavFilter,
    saveLangFilter,
    loadLangFilter,
    saveNavigationFilter,
    loadNavigationFilter,
  ],
}

const configureStore = (initialState = {}) => {
  // Add default reducers
  reducerRegistery.register(authReducerName, authReducer)
  reducerRegistery.register(firstLoadReducerName, firstLoadReducer)
  reducerRegistery.register(userReducerName, userReducer)
  reducerRegistery.register(themesReducerName, themesReducer)
  reducerRegistery.register(conversionReducerName, conversionReducer)
  reducerRegistery.register(languagesReducerName, languagesReducer)
  reducerRegistery.register(navigationReducerName, navigationReducer)

  const reducers = persistCombineReducers(
    storageConfig,
    reducerRegistery.getReducers()
  )

  const composeWithDevToolsExtension =
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancers =
    typeof composeWithDevToolsExtension === "function"
      ? composeWithDevToolsExtension
      : compose

  const middleware = composeEnhancers(
    applyMiddleware(thunk, createApiClient(clients), logger)
  )

  const store = createStore(reducers, initialState, middleware)

  return store
}

export default configureStore
