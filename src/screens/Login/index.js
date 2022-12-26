import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Color from 'color';
import isEqual from 'lodash/isEqual';

import HeaderBar from '../../components/HeaderBar';
import KeyboardSpacer from '../../components/KeyboardSpacer';
import Logo from '../../components/Logo';

import { login } from '../../redux/reducers/authentication/actionCreators';
import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';

import themeStyles from './styles';

function Login() {
  const dispatch = useDispatch();
  const styleableTheme = useSelector(selectStyleableTheme);

  const styles = themeStyles(styleableTheme);
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);
  const [, setScrollEnabled] = useState(false);

  // eslint-disable-next-line no-promise-executor-return
  const sleep = duration => new Promise(resolve => setTimeout(() => resolve(), duration));

  return (
    <View style={styles.root} testID="login_screen">
      <HeaderBar isHeaderShow={false} title={t('login.title')} />
      <KeyboardAwareScrollView
        scrollEnabled
        behavior="padding"
        style={styles.container}
        contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Logo />
          <Formik
            initialValues={{
              email: __DEV__ ? 'admin@admin.com' : '',
              password: __DEV__ ? 'admin' : '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email(t('login.invalid_email')).required(t('common.required')),
              password: Yup.string().required(t('common.required')),
            })}
            onSubmit={values => {
              const loginFakeData = {
                email: 'admin@admin.com',
                password: 'admin',
              };
              if (isEqual(values, loginFakeData)) {
                setLoader(true);
                sleep(5000).then(() => {
                  dispatch(login());
                  setLoader(false);
                });
              } else {
                Alert.alert('Error', t('login.email_mismatch'), [
                  {
                    text: t('common.ok'),
                    onPress: () => console.log('OK Pressed'),
                    testID: 'alert',
                  },
                ]);
              }
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="email"
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  placeholder={t('login.email')}
                  placeholderTextColor={Color(styleableTheme.A700).darken(0.6).hex()}
                  style={styles.input}
                  testID="email"
                  value={values.email}
                />
                {touched.email && errors.email ? <Text>{errors.email}</Text> : null}
                <TextInput
                  autoCapitalize="none"
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  placeholder={t('login.password')}
                  placeholderTextColor={Color(styleableTheme.A700).darken(0.6).hex()}
                  secureTextEntry
                  style={styles.input}
                  testID="password"
                  value={values.password}
                />
                {touched.password && errors.password ? <Text>{errors.password}</Text> : null}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.submitButton}
                  testID="submit">
                  <Text style={styles.submitButtonText}>{t('login.submit')}</Text>
                </TouchableOpacity>
                {loader ? <ActivityIndicator color="#fff" /> : null}
              </View>
            )}
          </Formik>
          <KeyboardSpacer onToggle={visible => setScrollEnabled(visible)} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Login;
