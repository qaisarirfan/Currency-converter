import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

import themeStyles from './styles';
import { CustomStatusBar } from '../CustomStatusBar';
import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';

function HeaderBar({ title, isHeaderShow, rightContent }) {
  const styleableTheme = useSelector(selectStyleableTheme);
  const { canGoBack, goBack } = useNavigation();
  const { t } = useTranslation();

  const styles = themeStyles(styleableTheme);
  let style = {};
  if (isHeaderShow) {
    style = {
      backgroundColor: styleableTheme[800],
    };
  } else {
    style = {
      paddingBottom: 0,
      paddingTop: 0,
    };
  }

  return (
    <View style={[styles.root, { ...style }]}>
      <CustomStatusBar barStyle="light-content" backgroundColor={styleableTheme[800]} />
      <View style={[styles.header, { ...style }]}>
        <View style={styles.back}>
          {isHeaderShow && canGoBack() ? (
            <TouchableOpacity testID="back" onPress={goBack} style={styles.backButton}>
              <Entypo name="chevron-left" size={16} color={styleableTheme[50]} />
              <Text style={styles.text}>{t('common.back')}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {isHeaderShow ? (
          <View style={styles.title}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
              {title}
            </Text>
          </View>
        ) : null}
        <View style={styles.right}>{rightContent}</View>
      </View>
    </View>
  );
}

HeaderBar.propTypes = {
  isHeaderShow: PropTypes.bool,
  rightContent: PropTypes.node,
  title: PropTypes.string.isRequired,
};

HeaderBar.defaultProps = {
  isHeaderShow: true,
  rightContent: null,
};

export default HeaderBar;
