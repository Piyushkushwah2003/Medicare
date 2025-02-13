import React from 'react';
import Usertab from '../../components/usertab';
import {ScrollView, StyleSheet} from 'react-native';
import Searchbar from '../../components/searchbar';
import FlexBox from '../../components/flexBox';
import Title from '../../components/title';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import Box from '../../components/box';
import Appointment from '../../components/appointment';
import Reports from '../../components/reports';
import UpcomingAppointment from '../../components/upcomingAppointment';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/root reducer';
import Prescription from '../../components/prescription';
export default function () {
  const {userAppointmentlist} = useSelector((state: RootState) => state.User);
  return (
    <>
      <ScrollView>
        <Usertab />
        <Box>
          <FlexBox flexDirection="column" rowgap={20}>
            <Searchbar />
            <Title text="Quick Actions" textStyle={styles.titleText} />
            <FlexBox
              alignItems="center"
              justifyContent="between"
              columngap={10}>
              <Appointment />
              <Reports />
            </FlexBox>
            <Title text="Upcoming Appointments" textStyle={styles.titleText} />
            <FlexBox flexDirection="column" rowgap={10}>
              {userAppointmentlist.map((item, index) => (
                <UpcomingAppointment
                  imageSource={item.profileimage}
                  name={item.doctorName}
                  speciality={item.speciality}
                  time={item.time}
                />
              ))}
            </FlexBox>
            <Title text="Recent Prescriptions" textStyle={styles.titleText} />
            <Prescription
              checkupType="General Checkup"
              name="Dr.Michael Brown"
              time="23 March 2024"
            />
          </FlexBox>
        </Box>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: SIZE.MEDIUM,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
});
