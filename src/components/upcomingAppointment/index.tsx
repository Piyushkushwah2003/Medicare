import React from 'react';
import FlexBox from '../flexBox';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Title from '../title';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZE} from '../../config/constants';
export default function ({
  imageSource,
  name,
  speciality,
  time,
}: {
  imageSource: ImageSourcePropType;
  name: string;
  speciality: string;
  time: string;
}) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <FlexBox flexDirection="column" rowgap={2}>
          <Title text={name} textStyle={styles.nametext} />
          <Title text={speciality} textStyle={styles.specialitytext} />
          <FlexBox alignItems="center" columngap={5}>
            <Feather name="clock" size={14} color={COLORS.NEUTRAL_200} />
            <Title text={time} textStyle={styles.specialitytext} />
          </FlexBox>
        </FlexBox>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  container: {
    flexDirection: 'row',
    columnGap: 20,
    width: '100%',
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    padding: 10,
  },
  nametext: {
    fontSize: SIZE.SMALL,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  specialitytext: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '400',
    color: COLORS.NEUTRAL_400,
  },
});
