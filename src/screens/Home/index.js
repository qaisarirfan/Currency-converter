import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cc from 'currency-codes';
import Entypo from 'react-native-vector-icons/Entypo';

import ConversionInput from '../../components/ConversionInput';
import HeaderBar from '../../components/HeaderBar';
import KeyboardSpacer from '../../components/KeyboardSpacer';
import Logo from '../../components/Logo';
import ReverseButton from '../../components/ReverseButton';

import {
  selectBaseCurrency,
  selectCurrencies,
  selectFavoriteCurrencies,
  selectQuoteCurrency,
  selectRatesLoader,
} from '../../redux/reducers/conversion/selectors';
import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';
import { createLoadAction, swapCurrency } from '../../redux/reducers/conversion/actionCreators';

import themeStyles from './styles';

function Home() {
  const { push, navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [, setScrollEnabled] = useState(false);
  const [value, setValue] = useState('100');

  const baseCurrency = useSelector(selectBaseCurrency);
  const favoriteCurrencies = useSelector(selectFavoriteCurrencies);
  const loader = useSelector(selectRatesLoader);
  const quoteCurrency = useSelector(selectQuoteCurrency);
  const rates = useSelector(selectCurrencies);
  const styleableTheme = useSelector(selectStyleableTheme);

  const styles = themeStyles(styleableTheme);

  const conversionRate = (rates && rates.find((rate) => rate.name === quoteCurrency)) || {};

  const favConversion =
    favoriteCurrencies ||
    [].map((currency) => (rates && rates.find((rate) => rate.name === currency)) || {});

  const rate = conversionRate?.rate || 0;
  const inputValue = parseFloat(value) || 0;
  let convertedValue = t('home.converting');
  if (!loader) {
    convertedValue = (rate * inputValue).toFixed(2);
  }

  useEffect(() => {
    dispatch(createLoadAction(baseCurrency));
  }, [baseCurrency]);

  return (
    <View style={styles.root} testID="welcome">
      <HeaderBar
        title={t('home.title')}
        isHeaderShow={false}
        rightContent={
          <TouchableOpacity testID="options_screen_button" onPress={() => push('Options')}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        }
      />
      <KeyboardAwareScrollView testID="home_screen" scrollEnabled behavior="padding">
        <View style={styles.content}>
          <Logo />
          <Text style={styles.textHeader}>{t('home.currency_converter')}</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              keyboardType="numeric"
              testID="conversion_input_1"
              value={value.toString()}
              text={baseCurrency}
              onChangeText={setValue}
              onButtonPress={() =>
                navigate('Options', {
                  screen: 'CurrencyList',
                  params: {
                    title: t('home.base_currency'),
                    isBaseCurrency: true,
                  },
                })
              }
            />
            <ConversionInput
              editable={false}
              testID="conversion_input_2"
              text={quoteCurrency}
              value={convertedValue}
              onButtonPress={() =>
                navigate('Options', {
                  screen: 'CurrencyList',
                  params: {
                    title: t('home.quote_currency'),
                    isBaseCurrency: false,
                  },
                })
              }
            />
            <ReverseButton
              text={t('home.reverse_currencies')}
              onPress={() => dispatch(swapCurrency())}
            />
            {loader ? <ActivityIndicator color="#fff" /> : null}
          </View>
          {!loader && (
            <View style={styles.listWrapper}>
              {favConversion.map((v) => (
                <View style={styles.list} key={`fav-${v.name}`}>
                  <Text>{cc.code(v.name).currency}</Text>
                  <Text>
                    {v.name} {(v.rate * inputValue).toFixed(2) || ''}
                  </Text>
                </View>
              ))}
            </View>
          )}
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Home;
