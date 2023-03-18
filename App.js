import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/Login';
import Profile from './src/screens/Profile/Profile';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Profie' component={Profile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
