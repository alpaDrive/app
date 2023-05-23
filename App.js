import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import Login from './src/screens/Login/Login';
import Profile from './src/screens/Profile/Profile';
import SignUp from './src/screens/SignUp/SignUp';
import Landing from './src/screens/Landing/Landing'
import Ques from './src/screens/Ques/Ques';
import Connect from './src/screens/Connect/Connect';
import Home from './src/screens/Home/Home'
import Empty from './src/screens/Empty/Empty';
import Pairing from './src/screens/Pairing/Pairing';
import Stats from './src/screens/Stats/Stats';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        <Stack.Screen name='Ques' component={Ques} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Empty' component={Empty} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        <Stack.Screen name='Pairing' component={Pairing} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        <Stack.Screen name='Connect' component={Connect} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Stats' component={Stats} options={{ headerShown: false, animation: 'slide_from_right' }} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
