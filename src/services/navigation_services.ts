import * as React from 'react';
import {
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import RootStackParamList from '../types/root_stack_param_list';
import {screenName} from '../types/screen_names';
// import {clearItem, StorageKeys} from './storageservices';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type ScreenName = keyof RootStackParamList;

export function reset(name: ScreenName, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name,
            params,
          },
        ],
      }),
    );
  }
}

export function navigate(name: screenName, params?: any) {
  navigationRef.navigate(name);
}

export function replace(name: screenName, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

// export async function logout() {
//   try {
//     await clearItem(StorageKeys.Token);
//     navigationRef.current?.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{name: 'UserSelection'}],
//       }),
//     );
//   } catch (error) {
//     console.error('Error during logout:', error);
//   }
// }

export function push(name: screenName, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}
export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export function goBack() {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
}
export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}
