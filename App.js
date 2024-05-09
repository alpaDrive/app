import 'expo-dev-client'

import * as React from 'react'
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import { registerForPushNotificationsAsync, updateToken } from './src/api/notifications';
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
import { Recordings } from './src/screens/Recordings/Recordings';
import Player from './src/screens/Player/Player';
import { getVid } from './src/api/auth';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  const [notification, setNotification] = React.useState(undefined);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync()
      .then(async(token) => {
        vid = getVid();
        if(vid) updateToken(vid, token)
      })
      .catch((error) => Alert.alert('expo tokens', `${error}`));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {

    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
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
        <Stack.Screen name='Recordings' component={Recordings} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Player' component={Player} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
