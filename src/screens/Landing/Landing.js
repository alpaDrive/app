import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = ({ navigation }) => {

    const goTo = (screen) => {
        navigation.reset({
            index: 0,
            routes: [{ name: screen }],
        });
        navigation.navigate(screen)
    }
    // when user opens app, run this code
    React.useEffect(() => {
        async function check() {
            // get the value from secure store to see if it exists
            let result = await SecureStore.getItemAsync("alpaDrive");
            if (result) goTo('Profile')
            else goTo('Login')
        }
        setTimeout(() => check(), 1500)
    }, [])

    return <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000D' }} >
        <Image style={{
            width: Dimensions.get('window').width / 1.8,
            resizeMode: 'contain'
        }} source={require('../../assets/img/logo.png')} />
    </SafeAreaView>
}

export default Landing;