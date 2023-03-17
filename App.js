import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Empty from './src/screens/Empty/Empty';
import Pairing from './src/screens/Pairing/Pairing';
// import Login from './src/screens/Login/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Empty' component={Empty} options={{ headerShown: false }} />
        <Stack.Screen name='Pairing' component={Pairing} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
