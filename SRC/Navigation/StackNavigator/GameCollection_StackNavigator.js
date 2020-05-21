import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponent from '../../Components/HomeComponent';
import PlaCardsComponent from '../../Components/Games/PlaCards/PlaCardsComponent';
const Stack = createStackNavigator();

const GameCollection_StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'PlaCardsComponent'}
        component={PlaCardsComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'HomeComponent'}
        component={HomeComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default GameCollection_StackNavigator;
