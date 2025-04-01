import React, {useState} from 'react';
import FlexBox from '../../components/flexBox';
import Title from '../../components/title';
import Screen from '../../components/screen';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Inputfield from '../../components/inputfield';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import Box from '../../components/box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {goBack, navigate} from '../../services/navigation_services';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/root reducer';
export default function () {
  const {userselectedoption} = useSelector((state: RootState) => state.User);
  const [email, setEmail] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [mobilenumber, setMobilenumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log('selectedOption----', userselectedoption);
  return (
    <>
      <Screen color={COLORS.NATURAL_WHITE}>
        <Box>
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="arrowleft" size={26} color={COLORS.PRIMARY_600} />
          </TouchableOpacity>
          <FlexBox flexDirection="column" rowgap={40}>
            <FlexBox flexDirection="column">
              <Title text="Hey there" textStyle={styles.text} />
              <Title text="Create an Account" textStyle={styles.text2} />
            </FlexBox>
            <FlexBox flexDirection="column" alignItems="center" rowgap={15}>
              <Inputfield
                placeholder="Full name"
                onValueChange={text => setFullname(text)}
                value={fullname}
              />
              <Inputfield
                placeholder="Email"
                onValueChange={text => setEmail(text)}
                value={email}
              />
              <Inputfield
                placeholder="Mobile number"
                onValueChange={text => setMobilenumber(text)}
                value={mobilenumber}
              />
              <Inputfield
                placeholder="Password"
                onValueChange={text => setPassword(text)}
                value={password}
                password={false}
              />
              <Button
                buttonText="Register"
                buttonStyle={styles.button}
                textStyle={styles.buttontext}
                handlePress={() => navigate('Otp')}
              />
            </FlexBox>
          </FlexBox>
          <FlexBox
            flexDirection="column"
            style={styles.orContainer}
            alignItems="center"
            rowgap={20}>
            <FlexBox alignItems="center" columngap={10} justifyContent="center">
              <FlexBox style={styles.line}></FlexBox>
              <Title text="or" textStyle={styles.or} />
              <FlexBox style={styles.line}></FlexBox>
            </FlexBox>
            <TouchableOpacity>
              <Image source={IMAGES.google} style={styles.google} />
            </TouchableOpacity>
            <FlexBox>
              <Title
                text="Already have an account?  "
                textStyle={styles.text3}
              />
              <TouchableOpacity onPress={() => navigate('Login')}>
                <Title text="Log In" textStyle={styles.text4} />
              </TouchableOpacity>
            </FlexBox>
          </FlexBox>
        </Box>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 40,
    backgroundColor: COLORS.PRIMARY_600,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttontext: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NATURAL_WHITE,
  },
  text: {
    fontSize: SIZE.SMALL,
    color: COLORS.PRIMARY_600,
    textAlign: 'center',
  },
  text2: {
    fontSize: SIZE.LARGE,
    color: COLORS.PRIMARY_600,
    fontWeight: '600',
    textAlign: 'center',
  },
  line: {
    width: '42%',
    height: 1,
    backgroundColor: COLORS.PRIMARY_600,
  },
  or: {
    color: COLORS.PRIMARY_600,
    fontSize: SIZE.EXTRASMALL,
  },
  orContainer: {
    marginTop:200,
    alignSelf: 'center',
  },
  google: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text3: {
    fontSize: SIZE.EXTRASMALL,
  },
  text4: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '400',
    color: COLORS.PRIMARY_600,
  },
});
