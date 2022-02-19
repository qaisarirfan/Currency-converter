import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';

import RowItem, { RowSeparator } from '../../components/RowItem';
import HeaderBar from '../../components/HeaderBar';

import {
  selectDefaultTheme,
  selectStyleableTheme,
  selectThemes,
} from '../../redux/reducers/themes/selectors';
import { createChangeThemeAction } from '../../redux/reducers/themes/actionCreators';

import themeStyles from './styles';

function Themes() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const defaultTheme = useSelector(selectDefaultTheme);
  const styleableTheme = useSelector(selectStyleableTheme);
  const themes = useSelector(selectThemes);

  const styles = themeStyles(styleableTheme);
  const colors = Object.keys(themes) || [];

  return (
    <View style={styles.root}>
      <HeaderBar title={t('themes.title')} />
      <SafeAreaView>
        <ScrollView>
          {colors.map((color, index) => (
            <React.Fragment key={`theme-${index + 1}`}>
              <RowItem
                testID={`theme-${index + 1}`}
                title={`${t('themes.theme')} ${index + 1}`}
                onPress={() => dispatch(createChangeThemeAction(color))}
                rightIcon={
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    {defaultTheme === color ? (
                      <View style={{ marginRight: 12 }}>
                        <Entypo name="check" size={20} color={styleableTheme[50]} />
                      </View>
                    ) : null}
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: color,
                      }}
                    />
                  </View>
                }
              />
              <RowSeparator />
            </React.Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Themes;
