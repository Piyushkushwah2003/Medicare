import {combineReducers} from '@reduxjs/toolkit';
import UserSlice, {UserState} from '../slices/user_slice';

export type RootState = {
  User: UserState;
};

const rootReducer = combineReducers({
  User: UserSlice,
});
export default rootReducer;
