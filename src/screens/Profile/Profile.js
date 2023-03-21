import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Profile = ({ navigation }) => {

    let [creds, setCreds] = React.useState({})

    React.useEffect(() => {
        async function check() {
            // get the value from secure store to see if it exists
            let result = await SecureStore.getItemAsync("alpaDrive");
            if (result) setCreds(JSON.parse(result))
        }
        check()
    }, [])

    return <SafeAreaView style={styles.root}>
        <View style={styles.header}>
            <View style={styles.profile}>
                <View style={styles.icon}>
                    <AntDesign name="user" size={30} color="white" />
                </View>
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={styles.details}>
                {creds.name ? <Text style={styles.user}>{creds.name.replace(/^"|"$/g, '')}</Text> : null}
                {creds.email ? <Text style={{ color: 'white' }}>{creds.email.replace(/^"|"$/g, '')}</Text> : null}
            </View>
        </View>
        <View style={styles.buttons}>
            <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <View style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>FAQ</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>View the most asked questions </Text>
                </View>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View>
            <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <View style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>Switch Vehicle</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>Change the currently active vehicle</Text>
                </View>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View>
            <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <View style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>Dummy Option</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>To be implemented in a future release</Text>
                </View>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View>
            <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <View style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>Dummy Option</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>To be implemented in a future release</Text>
                </View>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View>
        </View>
        <View style={styles.signout}>
            <Pressable onPress={async () => {
                await SecureStore.deleteItemAsync("alpaDrive");
                navigation.navigate('Login');
            }}>
                <Text style={{ fontSize: 15, color: 'white' }}>SIGN OUT</Text>
            </Pressable>
            <Text style={{ fontSize: 10, color: '#8D8A8A' }}>v0.1..0</Text>
            <Text style={{ fontSize: 8, color: '#8D8A8A' }}>Designed by alpaDrive</Text>
        </View>
    </SafeAreaView>
}

export default Profile