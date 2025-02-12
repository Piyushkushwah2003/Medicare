import {ImageSourcePropType} from 'react-native';

export type Appointment = {
  profileimage: ImageSourcePropType;
  doctorName: string;
  speciality: string;
  time: string;
};
