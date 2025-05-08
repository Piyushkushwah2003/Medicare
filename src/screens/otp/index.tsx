import React, {useState} from 'react';
import Box from '../../components/box';
import Title from '../../components/title';
import Button from '../../components/button';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/root reducer';
import {navigate} from '../../services/navigation_services';
import {StyleSheet, ToastAndroid} from 'react-native';
import {COLORS, FONTS, SIZE} from '../../config/constants';
import OTPTextInput from 'react-native-otp-textinput';
import Screen from '../../components/screen';
export default function () {
  const {userselectedoption} = useSelector((state: RootState) => state.User);
  const [otp, setOtp] = useState('');
  return (
    <>
      <Screen color="white">
        <Box>
          <Title text="Otp verification" textStyle={styles.title} />
          <Title text="Please enter the 6-digit code sent to your phone" />
          <OTPTextInput
            handleTextChange={code => setOtp(code)}
            textInputStyle={styles.otpInput}
            tintColor={COLORS.PRIMARY_600}
            inputCount={6}
          />
          <Button
            buttonText="Submit"
            buttonStyle={styles.button}
            textStyle={styles.buttontext}
            handlePress={() => {
              if (otp === '123456') {
                userselectedoption === 2
                  ? navigate('Patientonbordingfirst')
                  : navigate('Doctoronbordingfirst');
              } else {
                ToastAndroid.show('Invalid Otp', ToastAndroid.SHORT);
              }
            }}
          />
        </Box>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.PRIMARY_600,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 4,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttontext: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NATURAL_WHITE,
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.PRIMARY_600,
    backgroundColor: COLORS.NATURAL_WHITE,
    paddingVertical: 10,
  },
  title: {
    fontFamily: FONTS.SEMIBOLD_600,
    fontSize: SIZE.EXTRALARGE,
  },
});
