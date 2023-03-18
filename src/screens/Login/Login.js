import * as React from 'react'
import { View, Text,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from'./styles';

const Login = () => {
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
                    style={styles.textinput}
                />
                <TextInput
                    placeholder='Enter password'
                    placeholderTextColor='grey' 
                    style={styles.textinput}
                />
            <View style={styles.button}>
                <Text style={styles.buttontext}>Go</Text>
            </View>
            </View>
            <View style={styles.subtextview}>
                <Text style={styles.subtexted}>Dont't have an account?<Text style={styles.sign}> Sign up</Text></Text>
            </View>
            <View style={styles.downtextview}>
                <Text style={styles.downtexted}>By continuing, you agree to our Terms Of Service & Privacy Policy</Text>
            </View>
        </View>
    </SafeAreaView>
        )
}

export default Login