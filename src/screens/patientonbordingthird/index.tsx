import React from 'react';
import Screen from '../../components/screen';
import FlexBox from '../../components/flexBox';
import Box from '../../components/box';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import Title from '../../components/title';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {navigate} from '../../services/navigation_services';
export default function () {
  return (
    <>
      <Screen>
        <Box>
          <Image source={IMAGES.prescription} style={styles.image} />
          <FlexBox flexDirection="column" rowgap={5} style={styles.content}>
            <Title text="Download Prescription" textStyle={styles.heading} />
            <Title
              text="Download Prescription for receiving the correct medication and dosage and get the diet information."
              textStyle={styles.description}
            />
          </FlexBox>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Userdashboard')}>
            <MaterialIcons
              name="arrow-forward"
              size={30}
              color={COLORS.NATURAL_WHITE}
            />
          </TouchableOpacity>
        </Box>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: SIZE.EXTRALARGE,
    fontWeight: '600',
    color: '#133E87',
  },
  description: {
    fontSize: SIZE.SMALL,
    color: COLORS.PRIMARY_800,
    width: '90%',
  },
  content: {
    marginTop: 100,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#133E87',
    borderRadius: 25,
    padding: 9,
    paddingLeft: 11,
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
});
