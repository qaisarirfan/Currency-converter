import React from 'react';
import { View, SafeAreaView, ScrollView, Image, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import i18next from 'i18next';
import RNBootSplash from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';

import RowItem, { RowSeparator } from '../../components/RowItem';
import HeaderBar from '../../components/HeaderBar';

import { createLanguageAction } from '../../redux/reducers/languages/actionCreators';
import { selectLanguage } from '../../redux/reducers/languages/selectors';
import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';

import constants from '../../constants';
import themeStyles from './styles';

function Languages() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const styleableTheme = useSelector(selectStyleableTheme);
  const currentLang = useSelector(selectLanguage);

  const styles = themeStyles(styleableTheme);

  const { allowedLanguages } = constants;
  const keys = Object.keys(allowedLanguages);

  const changeLanguage = ({ code, rtl }) => {
    i18next.changeLanguage(code).then(() => {
      dispatch(createLanguageAction(code));
      I18nManager.forceRTL(rtl);
      RNBootSplash.show({ duration: 700 });
      setTimeout(() => {
        RNRestart.Restart();
      }, 1000);
    });
  };

  return (
    <View style={styles.root}>
      <HeaderBar title={t('common.languages')} />
      <SafeAreaView>
        <ScrollView>
          {keys.map((languageCode) => {
            const language = allowedLanguages[languageCode];
            return (
              <React.Fragment key={language.code}>
                <RowItem
                  testID={language.code}
                  title={language.title}
                  onPress={() => changeLanguage(language)}
                  rightIcon={
                    <View
                      style={{
                        flexDirection: 'row',
                      }}
                    >
                      {currentLang === languageCode ? (
                        <View style={{ marginRight: 12 }}>
                          <Entypo name="check" size={20} color={styleableTheme[50]} />
                        </View>
                      ) : null}
                      <View>
                        <Image source={language.flag} />
                      </View>
                    </View>
                  }
                />
                <RowSeparator />
              </React.Fragment>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Languages;
