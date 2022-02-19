import { createReducer } from '../../utility';
import { SET_NAVIGATION } from './actions';

export const initialState = {
  navigation: null,
};

const reducers = {
  [SET_NAVIGATION](state, payload) {
    return {
      ...state,
      navigation: payload,
    };
  },
};

export default createReducer(reducers, initialState);
