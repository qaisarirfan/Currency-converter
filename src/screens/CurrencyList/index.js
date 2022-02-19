import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import cc from 'currency-codes';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';

import RowItem, { RowSeparator } from '../../components/RowItem';
import HeaderBar from '../../components/HeaderBar';

import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';
import {
  changeBaseCurrency,
  changeQuoteCurrency,
  toggleFavorite,
} from '../../redux/reducers/conversion/actionCreators';
import {
  selectBaseCurrency,
  selectCurrencies,
  selectQuoteCurrency,
} from '../../redux/reducers/conversion/selectors';

import themeStyles from './styles';

function Separator() {
  return <RowSeparator />;
}

function Footer() {
  return <View />;
}

function CurrencyList() {
  const { push } = useNavigation();
  const { name, params } = useRoute();
  const dispatch = useDispatch();

  const styleableTheme = useSelector(selectStyleableTheme);
  const baseCurrency = useSelector(selectBaseCurrency);
  const quoteCurrency = useSelector(selectQuoteCurrency);
  const rates = useSelector(selectCurrencies);

  const styles = themeStyles(styleableTheme);

  const isBaseCurrency = params?.isBaseCurrency;
  const title = params?.title;

  const exclude = isBaseCurrency ? quoteCurrency : baseCurrency;

  return (
    <View style={styles.root}>
      <HeaderBar title={title || name} />
      <FlatList
        data={rates || [].filter((rate) => exclude !== rate.name)}
        renderItem={({ item }) => {
          let selected = false;

          if (isBaseCurrency && item.name === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item.name === quoteCurrency) {
            selected = true;
          }
          const { currency } = cc.code(item.name);
          return (
            <RowItem
              title={`${item.name} (${currency})`}
              isButton={false}
              rightIcon={
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      paddingRight: 12,
                    }}
                    onPress={() => dispatch(toggleFavorite(item.name))}
                  >
                    <Entypo
                      name={item.isFavorite ? 'star' : 'star-outlined'}
                      size={30}
                      color={item.isFavorite ? '#FFDE00' : styleableTheme[500]}
                    />
                  </TouchableOpacity>
                  <CheckBox
                    value={selected}
                    tintColor={styleableTheme[900]}
                    onCheckColor={styleableTheme[50]}
                    onFillColor={styleableTheme[700]}
                    onTintColor={styleableTheme[900]}
                    onValueChange={() => {
                      if (isBaseCurrency) {
                        dispatch(changeBaseCurrency(item.name));
                      } else {
                        dispatch(changeQuoteCurrency(item.name));
                      }
                      push('Home');
                    }}
                  />
                </View>
              }
            />
          );
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
      />
    </View>
  );
}

export default CurrencyList;
