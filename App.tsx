
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Homepage from './src/pages/homepage';
import { Provider } from './src/component/blogContext';
import ShowScreen from './src/pages/showScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Homepage' component={Homepage}/>
        <Stack.Screen name='Showscreen' component={ShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({});

export default App;
