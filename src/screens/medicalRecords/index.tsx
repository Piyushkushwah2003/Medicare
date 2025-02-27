import React from 'react';
import Box from '../../components/box';
import Screenheader from '../../components/screenheader';
import FlexBox from '../../components/flexBox';
import Appointment from '../../components/appointment';
import {Image, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Title from '../../components/title';
export default function () {
  return (
    <>
      <Box>
        <Screenheader headerText="Medical Records" />
       <FlexBox flexDirection='column' rowgap={20}>
       <FlexBox alignItems="center" columngap={15}>
          <Appointment
            iconVisible={false}
            innerContainerStyle={styles.container}
            text="Prescriptions"
            textStyle={styles.text}
            children={
              <Fontisto
                name="prescription"
                color={COLORS.PRIMARY_900}
                size={18}
              />
            }
            children2={<Title text="12 Records" textStyle={styles.text2} />}
          />
          <Appointment
            iconVisible={false}
            innerContainerStyle={{backgroundColor: COLORS.NATURAL_WHITE}}
            children={<Image source={IMAGES.record} style={styles.record} />}
            text="Test Records"
            textStyle={styles.text}
            children2={<Title text="8 Records" textStyle={styles.text2} />}
          />
        </FlexBox>
        <Title text="Recent Records" textStyle={styles.titleText} />
       </FlexBox>
      </Box>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  text: {
    fontWeight: '500',
  },
  record: {
    height: 40,
    width: 40,
  },
  text2: {
    fontSize: SIZE.SMALLTEXT,
  },
  titleText: {
    fontSize: SIZE.MEDIUM,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
});
