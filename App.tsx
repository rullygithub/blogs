
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
import { BlogProvider } from './src/component/blogContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Homepage' component={Homepage}/>
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  )
}

const styles = StyleSheet.create({});

export default App;
