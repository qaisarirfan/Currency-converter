import React, { useEffect } from 'react';
import { I18nManager } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import RNBootSplash from 'react-native-bootsplash';

import CurrencyList from '../screens/CurrencyList';
import Home from '../screens/Home';
import Languages from '../screens/Languages';
import Login from '../screens/Login';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

import { createChangeThemeAction } from '../redux/reducers/themes/actionCreators';
import { createNavigationAction } from '../redux/reducers/navigation/actionCreators';
import { selectDefaultTheme } from '../redux/reducers/themes/selectors';
import { selectIsLoggedin } from '../redux/reducers/authentication/selectors';
import { selectLanguage } from '../redux/reducers/languages/selectors';
import { selectNavigation } from '../redux/reducers/navigation/selectors';

import constants from '../constants';

const Stack = createStackNavigator();

function OptionsStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Themes" component={Themes} />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          title: t('common.currency_list'),
        }}
      />
      <Stack.Screen name="Languages" component={Languages} />
    </Stack.Navigator>
  );
}

function App() {
  const dispatch = useDispatch();

  const currentNavigation = useSelector(selectNavigation);
  const isLoggedin = useSelector(selectIsLoggedin);
  const defaultTheme = useSelector(selectDefaultTheme);
  const currentLang = useSelector(selectLanguage);

  const { allowedLanguages } = constants;
  const { code, rtl } = allowedLanguages[currentLang];

  const onStateChangeHandler = data => {
    dispatch(createNavigationAction(data));
  };

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });

    i18next.changeLanguage(code);
    if (!rtl) {
      I18nManager.forceRTL(false);
    }

    if (defaultTheme) {
      dispatch(createChangeThemeAction(defaultTheme));
    }
  }, [defaultTheme, code, rtl]);

  return (
    <NavigationContainer initialState={currentNavigation} onStateChange={onStateChangeHandler}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedin ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Options" component={OptionsStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
