import React, {useContext} from "react"
import {View, Text, TouchableOpacity, TextInput} from "react-native"
import PropTypes from "prop-types"
import themeStyles from "./styles"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// ConversionInput Component content
export const ConversionInput = ({text, onButtonPress, ...rest}) => {
  const {styleableTheme} = useContext(ThemeContext)

  const styles = themeStyles(styleableTheme)

  const containerStyles = [styles.container]

  if (rest.editable === false) {
    containerStyles.push(styles.containerDisabled)
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...rest} />
    </View>
  )
}

// ConversionInput Proptypes
ConversionInput.propTypes = {}

// ConversionInput Default props
ConversionInput.defaultProps = {}

export default ConversionInput
