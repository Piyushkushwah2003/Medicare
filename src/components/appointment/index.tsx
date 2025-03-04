import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import FlexBox from '../flexBox';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZE} from '../../config/constants';
import Title from '../title';
export default function ({
  innerContainerStyle,
  text = 'Book Appointment',
  iconVisible = true,
  children,
  textStyle,
  children2,
  containerStyle,
}: {
  innerContainerStyle?: ViewStyle;
  text?: string;
  iconVisible?: boolean;
  children?: React.ReactNode;
  children2?: React.ReactNode;
  textStyle?: TextStyle;
  containerStyle?:ViewStyle;
}) {
  return (
    <>
      <TouchableOpacity style={[styles.container,containerStyle]}>
        <FlexBox style={[styles.cal, innerContainerStyle]}>
          {iconVisible && (
            <Feather name="calendar" size={18} color={COLORS.PRIMARY_900} />
          )}
          {children}
        </FlexBox>
        <Title text={text} textStyle={[styles.text, textStyle]} />
        {children2}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cal: {
    backgroundColor: '#dbeafe',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    padding: 15,
    width: '48%',
    flexDirection: 'column',
    rowGap: 10,
    borderWidth:1,
    borderColor:COLORS.PRIMARY_900
  },
  text: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NEUTRAL_800,
  },
});
