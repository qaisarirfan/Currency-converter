import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { render } from 'react-native-testing-library';
import configureStore from 'redux-mock-store';

import { initialState as themesState } from '../src/redux/reducers/themes';
import configureI18next from '../src/services/i18n';

const INITIAL_STATE = {
  themes: themesState,
};
const mockStore = configureStore([]);
const store = mockStore(INITIAL_STATE);

const reduxRender = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <I18nextProvider i18n={configureI18next()}>{children}</I18nextProvider>
      </Provider>
    ),
    ...options,
  });

// re-export everything for convenience
export * from 'react-native-testing-library';

// override render method
export { reduxRender as render, store };
