import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';

import RowItem from '../../components/RowItem';
import HeaderBar from '../../components/HeaderBar';

import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';
import { logout } from '../../redux/reducers/authentication/actionCreators';

import themeStyles from './styles';

function Options() {
  const { push } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const styleableTheme = useSelector(selectStyleableTheme);

  const styles = themeStyles(styleableTheme);

  return (
    <View style={styles.root}>
      <HeaderBar title={t('options.title')} />
      <SafeAreaView>
        <ScrollView>
          <RowItem
            testID="themes"
            title={t('common.themes')}
            onPress={() => push('Themes')}
            rightIcon={<Entypo name="chevron-right" size={20} color={styleableTheme[50]} />}
          />
          <RowItem
            testID="languages"
            title={t('common.languages')}
            onPress={() => push('Languages')}
            rightIcon={<Entypo name="chevron-right" size={20} color={styleableTheme[50]} />}
          />
          <RowItem
            title={t('options.logout')}
            testID="logout"
            onPress={() => dispatch(logout())}
            rightIcon={<Entypo name="log-out" size={20} color={styleableTheme[50]} />}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Options;
