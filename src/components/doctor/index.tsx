import React from 'react';
import FlexBox from '../flexBox';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Title from '../title';
export default function ({
  name,
  speciality,
  rating,
  experience,
  profilePhoto,
}: {
  name: string;
  speciality: string;
  rating: string;
  experience: string;
  profilePhoto: ImageSourcePropType;
}) {
  return (
    <>
      <FlexBox flexDirection="column" style={styles.container}>
        <FlexBox columngap={10}>
          <Image source={profilePhoto} style={styles.image} />
          <FlexBox flexDirection="column" rowgap={5}>
            <Title text={`Dr.${name}`} textStyle={styles.name} />
            <Title text={speciality} textStyle={styles.speciality} />
            <FlexBox columngap={10}>
              <Title text={rating} textStyle={styles.rating} />
              <Title text={experience} textStyle={styles.rating} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '600',
    color: COLORS.NEUTRAL_800,
  },
  speciality: {
    fontSize: SIZE.SMALLTEXT,
    color: '#2563eb',
    fontWeight: '400',
  },
  rating: {
    fontSize: 10,
    color: '#4b5563',
    fontWeight: '400',
  },
  container: {
    padding: 10,
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 5,
  },
});
