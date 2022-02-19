import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import styles from './styles';

class COMPONENT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      show: true,
    });
  }

  render() {
    const { show } = this.state;

    return (
      <View>
        <Text>COMPONENT</Text>
      </View>
    );
  }
}

COMPONENT.propTypes = {};

COMPONENT.defaultProps = {};

export default flow([])(COMPONENT);
