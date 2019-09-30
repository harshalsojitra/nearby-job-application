import {registerRootComponent}  from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from '../store';
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
     const TabNavigator = createBottomTabNavigator({
      welcome: {screen: WelcomeScreen}, 
      auth: {screen: AuthScreen},
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen:  DeckScreen },
          review: {
            screen: createStackNavigator({
              review: {screen: ReviewScreen },
              settings: {screen: SettingsScreen }
            }) 
          }
        })
      }
  },
   {
    navigationOptions: {
      tabBarVisible: false  
    },
    lazyLoad: true
  });


const AppContainer = createAppContainer(TabNavigator);
    return (
      <Provider store={store}>
          <AppContainer/>
      </Provider>
      );
    } 
  }

Expo.registerRootComponent(App);