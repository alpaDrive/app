import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { View, Text, TextInput, Pressable, Alert, Keyboard, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import configs from '../../assets/configs';
import styles from './styles';

const SignUp = ({ navigation }) => {

    const [name, setname] = React.useState('')
    const [username, setusername] = React.useState('')
    const [email, setemail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [keyboardActive, setKeyboard] = React.useState(false)
    const [buffering, setBuffering] = React.useState(false)

    const submit = async () => {
        if (!name || !username || !email || !password) Alert.alert('Oops', "You can't leave a field blank!")
        else {
            setBuffering(true)
            const response = await fetch(`https://${configs.SERVER_URL}/signup`, {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                    "name": name,
                    "username": username,
                    "email": email,
                    "password": password,
                })
            })
            const body = await response.json()
            if (response.ok) {
                await SecureStore.setItemAsync("alpaDrive-user", JSON.stringify({
                    uid: body.uid,
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                    vehicles: []
                }))
                await SecureStore.setItemAsync("alpaDrive-vehicles", JSON.stringify([]))
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Empty' }],
                });
                navigation.navigate('Empty')
            } else {
                Alert.alert(JSON.stringify(body.error))
            }
            setBuffering(false)
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
            <View style={[styles.titleview, { justifyContent: keyboardActive ? 'flex-start' : 'flex-end' }]}>
                {!keyboardActive ? <Image style={styles.title} source={require('../../assets/img/logo.png')} /> : null}
            </View>
            <View style={styles.welcomeview}>
                {!keyboardActive ? <Text style={styles.welcome}>Let's get started</Text> : null}
                {!keyboardActive ? <Text style={styles.details}>Enter your details</Text> : null}
            </View>
            <View style={[styles.inputview, { justifyContent: keyboardActive ? 'flex-end' : 'center' }]}>
                <TextInput
                    placeholder='Enter your name '
                    placeholderTextColor='grey'
                    value={name}
                    onChangeText={text => setname(text)}
                    style={styles.textinput}
                />
                <TextInput
                    placeholder='Enter your username '
                    placeholderTextColor='grey'
                    value={username}
                    onChangeText={text => setusername(text)}
                    style={styles.textinput}
                />

                <TextInput
                    placeholder='Enter your email'
                    placeholderTextColor='grey'
                    value={email}
                    onChangeText={text => setemail(text)}
                    style={styles.textinput}
                />
                <TextInput
                    placeholder='Enter your password'
                    placeholderTextColor='grey'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.textinput}
                />
                {buffering ? <View style={{ marginVertical: 32, alignItems: 'center', height: 60, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color={'#1559DC'} />
                </View>:
                <Pressable onPress={submit} style={styles.button}>
                    <Text style={styles.buttontext}>Go</Text>
                </Pressable>}
            </View>
            {!keyboardActive ? <View style={styles.subtextview}>
                <Text style={styles.subtexted}>Already have an account?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.sign}> Log in</Text></Pressable>
            </View> : null}
            {!keyboardActive ? <View style={styles.downtextview}>
                <Text style={styles.downtexted}>By continuing, you agree to our Terms Of Service & Privacy Policy</Text>
            </View> : null}
        </SafeAreaView>
    )
}

export default SignUp