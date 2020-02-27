import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPage from './components/ViewPage/ViewPage'
import { Provider } from 'react-redux';
import store from './redux/store'
import DetailsPage from './components/DetailsPage/DetailsPage'

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator initialRouteName='Photos'>
            <Stack.Screen name='Photos' component={ViewPage}/>
            <Stack.Screen name='Fullsize' component={DetailsPage} />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}




