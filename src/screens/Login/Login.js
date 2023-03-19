import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { View, Text,TextInput, Pressable,Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from'./styles';

const Login = ({navigation}) => {

    const [id, setid] = React.useState('')
    const [password, setPassword] = React.useState('')

    // when user opens app, run this code
    React.useEffect(() => {
        // get the value from secure store to see if it exists
        let result = SecureStore.getItemAsync("alpaDrive");
        if (result) {
            navigation.navigate('Profile')
        }
    }, [])

    const submit = async () => {
        if (!id ||!password) Alert.alert('Oops', "You can't leave a field blank!")
        else {
            const response = await fetch('https://alpadrive.selseus.com/login', {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                        "username": id,
                        "email": id,
                        "password": password
                })
            })
            const body = await response.json()
            if (response.ok) {
                await SecureStore.setItemAsync("alpaDrive", JSON.stringify(body))
                navigation.navigate('Profile')
            } else {
                Alert.alert(JSON.stringify(body.error))
            }
        }
    }


    return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.titleview}>
                <Text style={styles.title}>ALPADRIVE</Text>
            </View>
            <View style={styles.welcomeview}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.details}>Enter your details</Text>
            </View>
            <View style={styles.inputview}>
                <TextInput
                    placeholder='Enter email or username '
                    placeholderTextColor='grey'
                    value={id}
                    onChangeText={text => setid(text)}
                    style={styles.textinput}
                />
                <TextInput
                    placeholder='Enter password'
                    placeholderTextColor='grey' 
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.textinput}
                />
            <Pressable onPress={submit} style={styles.button}>
                <Text style={styles.buttontext}>Go</Text>
            </Pressable>
            </View>
            <View style={styles.subtextview}>
                <Text style={styles.subtexted}>Dont't have an account?<Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.sign}> Sign up</Text></Pressable></Text>
            </View>
            <View style={styles.downtextview}>
                <Text style={styles.downtexted}>By continuing, you agree to our Terms Of Service & Privacy Policy</Text>
            </View>
        </View>
    </SafeAreaView>
        )
}

export default Login