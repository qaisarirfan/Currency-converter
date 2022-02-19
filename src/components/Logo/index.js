import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import styles from './styles';
import logo from '../../assets/images/logo.png';

const StyledView = styled.View`
  ${{ ...styles.logoContainer }}
`;

function Logo() {
  return (
    <StyledView>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </StyledView>
  );
}

export default Logo;
