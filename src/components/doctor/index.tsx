import React from 'react';
import FlexBox from '../flexBox';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Title from '../title';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function ({
  name,
  speciality,
  rating,
  experience,
  profilePhoto,
  timeVisible = false,
  time,
}: {
  name: string;
  speciality: string;
  rating: string;
  experience: string;
  profilePhoto: ImageSourcePropType;
  timeVisible?: boolean;
  time?: string[];
}) {
  return (
    <>
      <FlexBox flexDirection="column" style={styles.container}>
        <FlexBox columngap={15}>
          <Image source={profilePhoto} style={styles.image} />
          <FlexBox flexDirection="column" rowgap={5}>
            <Title text={`Dr.${name}`} textStyle={styles.name} />
            <Title text={speciality} textStyle={styles.speciality} />
            <FlexBox columngap={10} alignItems="center">
              <AntDesign name="star" size={12} color="#facc15" />
              <Title text={rating} textStyle={styles.rating} />
              <FlexBox style={styles.dot}></FlexBox>
              <Title
                text={`${experience}+ years exp`}
                textStyle={styles.rating}
              />
            </FlexBox>
            {timeVisible ? (
              <FlexBox alignItems="center" columngap={10}>
                {time !== undefined &&
                  time.map(item => (
                    <TouchableOpacity style={styles.timecontainer}>
                      <Title text={item} textStyle={styles.time} />
                    </TouchableOpacity>
                  ))}
              </FlexBox>
            ) : (
              <TouchableOpacity style={styles.button}>
                <Title text="View Profile" textStyle={styles.buttonText} />
              </TouchableOpacity>
            )}
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
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.NEUTRAL_300,
  },
  buttonText: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '500',
    color: COLORS.NATURAL_WHITE,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 60,
    backgroundColor: '#3b82f6',
    borderRadius: 6,
    marginLeft: 10,
    marginTop: 8,
  },
  time: {
    color: '#2563eb',
    fontSize: 10,
    fontWeight: '400',
  },
  timecontainer: {
    backgroundColor: '#eff6ff',
    padding: 5,
    borderRadius: 12,
  },
});
