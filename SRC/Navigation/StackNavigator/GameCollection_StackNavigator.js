import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponent from '../../Components/HomeComponent';
import Home2Component from '../../Components/Home2Component';
import PlaCardsComponent from '../../Components/Games/PlaCards/PlaCardsComponent';
import TicTacToeComponent from '../../Components/Games/TicTacToe/TicTacToeComponent';
import SplashScreenComponent from '../../Components/SplashScreen/SplashScreenComponent';
const Stack = createStackNavigator();

const GameCollection_StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'SplashScreenComponent'}
        component={SplashScreenComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'HomeComponent'}
        component={HomeComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Home2Component'}
        component={Home2Component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'TicTacToeComponent'}
        component={TicTacToeComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PlaCardsComponent'}
        component={PlaCardsComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default GameCollection_StackNavigator;
