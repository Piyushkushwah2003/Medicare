import React, { useState } from 'react';
import Box from '../../components/box';
import Title from '../../components/title';
import Button from '../../components/button';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/root reducer';
import {navigate} from '../../services/navigation_services';
import {StyleSheet} from 'react-native';
import {COLORS, SIZE} from '../../config/constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export default function () {
  const {userselectedoption} = useSelector((state: RootState) => state.User);
  const [otp, setOtp] = useState<string>('111111');
  return (
    <>
      <Box>
        <Title text="Otp verification" />
        <OTPInputView
        style={styles.otpInput}
        pinCount={6} // Adjust for OTP length
        autoFocusOnLoad
        code={otp}
        onCodeChanged={(code: string) => setOtp(code)}
        onCodeFilled={(code: string) => console.log(`OTP Entered: ${code}`)}
        keyboardType="number-pad"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
      />
        <Button
          buttonText="Submit"
          buttonStyle={styles.button}
          textStyle={styles.buttontext}
          handlePress={() => {
            userselectedoption === 2
              ? navigate('Patientonbordingfirst')
              : navigate('Doctoronbordingfirst');
          }}
        />
      </Box>
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
    position:'absolute',
    bottom:20
  },
  buttontext: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NATURAL_WHITE,
  },
  otpInput: {
    width: '80%',
    height: 100,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  underlineStyleHighLighted: {
    borderColor: '#007bff',
  },
});
