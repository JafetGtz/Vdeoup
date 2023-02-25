import React from 'react';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Route from './navigation';
export default () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};
