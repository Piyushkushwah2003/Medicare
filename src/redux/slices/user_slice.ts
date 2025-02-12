import {createSlice} from '@reduxjs/toolkit';
import {Appointment} from '../../types/helpertype';
import {IMAGES} from '../../config/constants';

export type UserState = {
  userselectedoption: number | null;
  userAppointmentlist: Appointment[];
};
const initialState: UserState = {
  userselectedoption: null,
  userAppointmentlist: [
    {
      profileimage: IMAGES.doctor,
      doctorName: 'Dr. Sara Wilson',
      speciality: 'Cardiologist',
      time: 'Today, 2:00 Pm',
    },
    {
      profileimage: IMAGES.doctor,
      doctorName: 'Dr. Ella Wlilliamson',
      speciality: 'Neurologist',
      time: '31 Jan, 7:00 Pm',
    },
  ],
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserselectedoption: (
      state,
      action: {
        type: string;
        payload: number;
      },
    ) => {
      state.userselectedoption = action.payload;
    },
    setUserAppointmentList: (
      state,
      action: {
        type: string;
        payload: Appointment[];
      },
    ) => {
      state.userAppointmentlist = action.payload;
    },
  },
});
export const {setUserselectedoption} = UserSlice.actions;
export default UserSlice.reducer;
