import { createSelector } from 'reselect';

import { reducerName } from './actions';

export const loginBase = (state) => state[reducerName]?.login || {};
export const selectAuthToken = createSelector(loginBase, (data) => data?.access_token || null);
export const selectIsLoggedin = createSelector(loginBase, (data) => data?.isLoggedin || false);
export const selectLoginData = createSelector(loginBase, (data) => data?.data || {});
export const selectLoginError = createSelector(loginBase, (data) => data?.error || null);
export const selectLoginIsLoading = createSelector(loginBase, (data) => data?.loader || false);
