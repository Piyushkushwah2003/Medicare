import {ImageSourcePropType} from 'react-native';

export type Appointment = {
  profileimage: ImageSourcePropType;
  doctorName: string;
  speciality: string;
  time: string;
};
export type UserBottomNavigationType = {
  name: string;
  icon: React.ReactNode;
  iconfill: React.ReactNode;
};

export type TabItems = {
  title: string;
  id: number;
};
