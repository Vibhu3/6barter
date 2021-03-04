import React from 'react';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator.js';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen: {
    screen: SignUpLoginScreen
  },
  BottomTab: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);