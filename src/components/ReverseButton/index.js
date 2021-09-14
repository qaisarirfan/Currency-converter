import React from "react"
import {Text, TouchableOpacity, Image} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"
import reverse from "../../assets/images/reverse.png"

// ReverseButton Component content
export const ReverseButton = ({onPress, text}) => (
  <TouchableOpacity
    testID="reverse_button"
    onPress={onPress}
    style={styles.button}>
    <Image source={reverse} style={styles.buttonIcon} resizeMode="contain" />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)

// ReverseButton Proptypes
ReverseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

// ReverseButton Default props
ReverseButton.defaultProps = {}

export default ReverseButton
