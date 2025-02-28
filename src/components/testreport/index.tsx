import React from 'react';
import FlexBox from '../flexBox';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../title';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Feather from 'react-native-vector-icons/Feather';
export default function ({
  checkupType,
  name,
  time,
  prescription = false,
}: {
  checkupType: string;
  name: string;
  time: string;
  prescription?: boolean;
}) {
  return (
    <>
      <FlexBox style={styles.container}>
        <FlexBox flexDirection="column" rowgap={10}>
          <FlexBox alignItems="center" columngap={10}>
            <TouchableOpacity>
              <Image source={IMAGES.record} style={styles.record} />
            </TouchableOpacity>
            <FlexBox flexDirection="column">
              <Title text={checkupType} textStyle={styles.nametext} />
              {prescription && (
                <Title text="Test Report" textStyle={styles.specialitytext} />
              )}
            </FlexBox>
          </FlexBox>
          <FlexBox flexDirection="column" rowgap={2}>
            <Title text={name} textStyle={styles.specialitytext} />
            <Title text={time} textStyle={styles.specialitytext} />
          </FlexBox>
        </FlexBox>
        <TouchableOpacity style={styles.download}>
          <Feather name="download" color={COLORS.PRIMARY_900} size={24} />
        </TouchableOpacity>
      </FlexBox>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  download: {
    marginRight: 20,
  },
  record: {
    width: 40,
    height: 40,
  },
});
