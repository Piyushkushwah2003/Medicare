import React from 'react';
import FlexBox from '../flexBox';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZE} from '../../config/constants';
import Title from '../title';
import {goBack} from '../../services/navigation_services';
export default function ({
  headerText = 'header',
  onpressback,
  headertextstyle,
  headerContainerStyle,
  children,
}: {
  headerText?: string;
  onpressback?: () => void;
  headertextstyle?: TextStyle;
  headerContainerStyle?: ViewStyle;
  children?: React.ReactNode;
}) {
  return (
    <>
      <FlexBox
        alignItems="center"
        justifyContent='between'
        style={[styles.container, headerContainerStyle]}>
        <FlexBox alignItems="center" columngap={20}>
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="arrowleft" color={COLORS.NEUTRAL_800} size={24} />
          </TouchableOpacity>
          <Title text={headerText} textStyle={[styles.text, headertextstyle]} />
        </FlexBox>
        {children}
      </FlexBox>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.MEDIUM,
    color: COLORS.NEUTRAL_800,
    fontWeight: '600',
  },
  container: {
    marginBottom: 20,
  },
});
