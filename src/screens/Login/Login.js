import * as React from 'react'
import { View, Text, TextInput, Pressable, Alert, Keyboard, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { login } from '../../api/auth';

const Login = ({ navigation }) => {

    const [id, setid] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [keyboardActive, setKeyboard] = React.useState(false)
    const [buffering, setBuffering] = React.useState(false)
    const field = React.useRef(null)

    const submit = async () => {
        if (!id || !password) Alert.alert('Oops', "You can't leave a field blank!")
        else {
            setBuffering(true)
            try {
                const screen = await login(id, password);
                navigation.reset({
                    index: 0,
                    routes: [{ name: screen }],
                });
                navigation.navigate(screen)
            } catch(error) {
                console.error(error)
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
            <View style={{ flex: 1 }} />
            <View style={styles.titleview}>
                {keyboardActive ? <Image style={styles.title} source={require('../../assets/img/logo.png')} /> : null}
            </View>
            {!keyboardActive ? <View style={styles.welcomeview}>
                <Image style={styles.title} source={require('../../assets/img/logo.png')} />
                <Text style={styles.welcome}>Buckle Up</Text>
                <Text style={styles.details}>Enter your details</Text>
            </View> : null}
            <View style={styles.inputview}>
                <TextInput
                    placeholder='Enter email or username '
                    placeholderTextColor='grey'
                    value={id}
                    onChangeText={text => setid(text)}
                    onSubmitEditing={() => field.current.focus()}
                    style={styles.textinput}
                />
                <TextInput
                    ref={field}
                    placeholder='Enter password'
                    placeholderTextColor='grey'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={submit}
                    style={styles.textinput}
                />
                {buffering ? <View style={{ marginVertical: 32, alignItems: 'center', height: 60, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color={'#1559DC'} />
                </View> :
                    <Pressable onPress={submit} style={styles.button}>
                        <Text style={styles.buttontext}>Go</Text>
                    </Pressable>}
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