import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = ({ navigation }) => {

    // when user opens app, run this code
    React.useEffect(() => {
        async function check () {
            // get the value from secure store to see if it exists
            let result = await SecureStore.getItemAsync("alpaDrive");
            console.log(result)
            if (result) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Profile' }],
                });
                navigation.navigate('Profile')
            }
        }
        check();
    }, [])

    return <SafeAreaView style={ { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000D' } } >
        <Text>ALPADRIVE</Text>
    </SafeAreaView>
}

export default Landing;
