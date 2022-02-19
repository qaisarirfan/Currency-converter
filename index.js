import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/lib/persistStore';

import App from './src/App';

import { name as appName } from './app.json';
import configureI18next from './src/services/i18n';
import configureStore from './src/redux/configureStore';

const initialState = {};
const store = configureStore(initialState);
const persistor = persistStore(store);

const i18n = configureI18next();

function Main() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>loading...</Text>} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

// export {default} from "./storybook"
