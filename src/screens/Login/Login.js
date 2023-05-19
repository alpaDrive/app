import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { View, Text, TextInput, Pressable, Alert, Keyboard, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const Login = ({ navigation }) => {

    const [id, setid] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [keyboardActive, setKeyboard] = React.useState(false)

    const submit = async () => {
        if (!id || !password) Alert.alert('Oops', "You can't leave a field blank!")
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
                let screen = 'Home'
                if(body.vehicles.length < 0) screen = 'Pairing' 
                navigation.reset({
                    index: 0,
                    routes: [{ name: screen }],
                });
                navigation.navigate(screen)
            } else {
                Alert.alert(JSON.stringify(body.error))
            }
        }
    }

    React.useEffect(() => {
        const show = Keyboard.addListener('keyboardDidShow', () => setKeyboard(true))
        const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboard(false))

        return () => {
            show.remove()
            hide.remove()
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }} />
            <View style={styles.titleview}>
                {keyboardActive ? <Image style={styles.title} source={require('../../assets/img/logo.png')} /> : null}
            </View>
            {!keyboardActive ? <View style={styles.welcomeview}>
                <Image style={styles.title} source={require('../../assets/img/logo.png')} />
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.details}>Enter your details</Text>
            </View> : null}
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
            {!keyboardActive ? <View style={[styles.subtextview, { flex: 2 }]}>
                <Text style={styles.subtexted}>Dont't have an account?</Text><Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.sign}> Sign up</Text></Pressable>
            </View> : null}
            {!keyboardActive ? <View style={[styles.downtextview, { flex: 0.5 }]}>
                <Text style={styles.downtexted}>By continuing, you agree to our Terms Of Service & Privacy Policy</Text>
            </View> : null}
        </SafeAreaView>
    )
}

export default Login