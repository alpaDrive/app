import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const SignUp = ({ navigation }) => {

    const [name, setname] = React.useState('')
    const [username, setusername] = React.useState('')
    const [email, setemail] = React.useState('')
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
        if (!name || !username || !email || !password) Alert.alert('Oops', "You can't leave a field blank!")
        else {
            const response = await fetch('https://alpadrive.selseus.com/signup', {
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
                    <Text style={styles.welcome}>Let's get started</Text>
                    <Text style={styles.details}>Enter your details</Text>
                </View>
                <View style={styles.inputview}>
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
                    <Pressable onPress={submit} style={styles.button}>
                        <Text style={styles.buttontext}>Continue</Text>
                    </Pressable>
                </View>
                <View style={styles.subtextview}>
                    <Text style={styles.subtexted}>Already have an account?<Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.sign}> Log in</Text></Pressable></Text>
                </View>
                <View style={styles.downtextview}>
                    <Text style={styles.downtexted}>By continuing, you agree to our Terms Of Service & Privacy Policy</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp