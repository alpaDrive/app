import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ques from './src/screens/Ques/Ques';
import Connect from './src/screens/Connect/Connect';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Connect' component={Connect} options={{ headerShown: false }} />
        <Stack.Screen name='Ques' component={Ques} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
