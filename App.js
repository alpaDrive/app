import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ques from './src/screens/Ques/Ques';
import Connect from './src/screens/Connect/Connect';
import Home from './src/screens/Home/Home'
import Empty from './src/screens/Empty/Empty';
import Pairing from './src/screens/Pairing/Pairing';
import Login from './src/screens/Login/Login';
import Daily from './src/screens/Daily/Daily';
import Periodic from './src/screens/Periodic/Periodic';
import Overall from './src/screens/Overall/Overall'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Connect' component={Connect} options={{ headerShown: false }} />
        <Stack.Screen name='Ques' component={Ques} options={{ headerShown: false }} />
        <Stack.Screen name='Empty' component={Empty} options={{ headerShown: false }} />
        <Stack.Screen name='Pairing' component={Pairing} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Daily' component={Daily} options={{ headerShown: false }} />
        <Stack.Screen name='Periodic' component={Periodic} options={{ headerShown: false }} />
        <Stack.Screen name='Overall' component={Overall} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
