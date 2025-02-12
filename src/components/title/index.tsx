import {
    StyleProp,
    TextStyle,
    Text,
    StyleSheet,
    ImageSourcePropType,
    Image,
  } from 'react-native';
import FlexBox from '../flexBox';
import { COLORS, LINEHEIGHT, SIZE } from '../../config/constants';
  
  export default function ({
    text = 'text',
    textStyle,
    enableTitleWithIcon = false,
    image,
    gap = 0,
  }: {
    text: string;
    textStyle?: StyleProp<TextStyle>;
    enableTitleWithIcon?: boolean;
    image?: ImageSourcePropType;
    gap?: number;
  }) {
    if (!enableTitleWithIcon) {
      return (
        <Text style={textStyle == undefined ? styles.text : textStyle}>
          {text}
        </Text>
      );
    } else {
      return (
        <FlexBox alignItems="center" columngap={gap}>
          <Image source={image} />
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </FlexBox>
      );
    }
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: SIZE.SMALL,
      lineHeight: LINEHEIGHT.LARGE,
      color: COLORS.NEUTRAL_800,
    },
  });
  