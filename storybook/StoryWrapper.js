import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../src/redux/configureStore';

const initialState = {};
const store = configureStore(initialState);

export function StoryWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
