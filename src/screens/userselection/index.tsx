import React, {useState} from 'react';
import FlexBox from '../../components/flexBox';
import Title from '../../components/title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, IMAGES, SIZE} from '../../config/constants';
import {Image, StyleSheet} from 'react-native';
import Screen from '../../components/screen';
import {TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import {navigate} from '../../services/navigation_services';
import { useDispatch } from 'react-redux';
import { setUserselectedoption } from '../../redux/slices/user_slice';
export default function () {
    const dispatch=useDispatch();
  const [selectedOption, setSelectedOption] = useState<number>(0);
  return (
    <>
      <Screen color={COLORS.NATURAL_WHITE}>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          rowgap={40}
          alignItems="center">
          <Title text="Medicare" textStyle={styles.heading} />
          <Image source={IMAGES.home} style={styles.image} />
        </FlexBox>
        <FlexBox
          flexDirection="column"
          alignItems="center"
          rowgap={25}
          style={styles.container}>
          <Title text="How’d you like to continue?" textStyle={styles.text} />
          <FlexBox alignItems="center" columngap={20}>
            <TouchableOpacity
              onPress={() => setSelectedOption(1)}
              style={
                selectedOption === 1 ? styles.selectOption : styles.option
              }>
              <MaterialCommunityIcons
                name={selectedOption === 1 ? 'check-circle' : 'circle-outline'}
                size={20}
                color={COLORS.PRIMARY_600}
              />
              <Title
                text="Doctor"
                textStyle={
                  selectedOption === 1
                    ? styles.optionText
                    : styles.selectedOptionText
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption(2)}
              style={
                selectedOption === 2 ? styles.selectOption : styles.option
              }>
              <MaterialCommunityIcons
                name={selectedOption === 2 ? 'check-circle' : 'circle-outline'}
                size={20}
                color={COLORS.PRIMARY_600}
              />
              <Title
                text="Patient"
                textStyle={
                  selectedOption === 2
                    ? styles.optionText
                    : styles.selectedOptionText
                }
              />
            </TouchableOpacity>
          </FlexBox>
        </FlexBox>
      </Screen>

      <Button
        buttonText="Continue"
        textStyle={styles.buttontext}
        buttonStyle={styles.button}
        handlePress={() => {
            dispatch(setUserselectedoption(selectedOption));
            navigate('Login')}}
      />
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '50%',
  },
  heading: {
    // fontFamily:FONTS.SEMIBOLD_600,
    fontWeight: '700',
    fontSize: SIZE.DOUBLELARGE,
    color: '#0A5EB0',
  },
  text: {
    fontSize: SIZE.LARGE,
    color: COLORS.PRIMARY_600,
    fontWeight: '600',
  },
  option: {
    width: 156,
    height: 110,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_100,
    padding: 10,
    backgroundColor: COLORS.PRIMARY_100,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selectOption: {
    width: 156,
    height: 110,
    borderRadius: 8,
    padding: 10,
    backgroundColor: COLORS.PRIMARY_100,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_600,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: SIZE.SMALL,
    color: COLORS.PRIMARY_600,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: '600',
  },
  selectedOptionText: {
    fontSize: SIZE.SMALL,
    color: COLORS.PRIMARY_600,
    marginBottom: 5,
    marginLeft: 5,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: COLORS.PRIMARY_600,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 4,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buttontext: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NATURAL_WHITE,
  },
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 110,
  },
});
