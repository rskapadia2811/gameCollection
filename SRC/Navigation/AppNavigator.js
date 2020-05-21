import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GameCollection_StackNavigator from './StackNavigator/GameCollection_StackNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <GameCollection_StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
