import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from 'react-native';
export default function ({
  buttonText,
  textStyle,
  buttonStyle,
  handlePress,
}: {
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: ViewStyle;
  handlePress?: () => void;
}) {
  return (
    <>
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
}
