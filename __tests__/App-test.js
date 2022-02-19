import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, cleanup, store} from '../jest/testUtils';

afterEach(() => {
  cleanup();
  store.clearActions();
  jest.useFakeTimers()
});

it('renders correctly', () => {
  render(<App />);
});
