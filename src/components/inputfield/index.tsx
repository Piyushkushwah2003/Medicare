import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, ViewStyle} from 'react-native';
import {COLORS, SIZE} from '../../config/constants';
import FlexBox from '../flexBox';
import Entypo from 'react-native-vector-icons/Entypo';
export default function ({
  placeholder,
  inputStyle,
  value,
  password = true,
  onValueChange,
}: {
  placeholder?: string;
  inputStyle?: ViewStyle;
  value?: string;
  onValueChange: (text: string) => void;
  password?: boolean;
}) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      {password ? (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onValueChange}
          placeholderTextColor={COLORS.NEUTRAL_400}
          style={[styles.input, inputStyle]}></TextInput>
      ) : (
        <FlexBox alignItems="center">
          <TextInput
            placeholder={placeholder}
            value={value}
            secureTextEntry={!showPassword}
            onChangeText={onValueChange}
            placeholderTextColor={COLORS.NEUTRAL_400}
            style={[styles.input2, inputStyle]}></TextInput>
          <FlexBox style={styles.eye} alignItems="center">
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                name={showPassword ? 'eye' : 'eye-with-line'}
                color={COLORS.PRIMARY_600}
                size={20}
              />
            </TouchableOpacity>
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_600,
    color: COLORS.NEUTRAL_800,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: SIZE.EXTRASMALL,
  },
  eye: {
    width: '10%',
    height: 40,
    borderColor: COLORS.PRIMARY_600,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  input2: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_600,
    color: COLORS.NEUTRAL_800,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: SIZE.EXTRASMALL,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
