import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { SafeAreaView, View, Text, Pressable, Modal, ActivityIndicator, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Profile = ({ navigation }) => {

    let [creds, setCreds] = React.useState({})
    let [popup, showPopUp] = React.useState(false)
    let [vehicle, setVehicle] = React.useState(null)

    React.useEffect(() => {
        async function check() {
            let result = await SecureStore.getItemAsync("alpaDrive-user");
            if (result) setCreds(JSON.parse(result))

            let data = JSON.parse(await SecureStore.getItemAsync("alpaDrive-vehicles"))[0]
            setVehicle(data)
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
        <Modal visible={popup} onRequestClose={() => showPopUp(false)} transparent animationType="slide">
            <View style={styles.modalContainer}>
                <Pressable onPress={() => showPopUp(false)} style={styles.modalblank} />
                {vehicle != null ? <View style={styles.modalContent}>
                    <Text style={styles.helpertext}>Scan this on your partner's mobile app to pair</Text>
                    <QRCode size={Dimensions.get('window').height / 5.5} value={JSON.stringify({ vid: vehicle._id.$oid, initial: false })} />
                    <Text style={styles.model}>{vehicle.model}</Text>
                    <Text style={styles.make}>{vehicle.company}</Text>
                </View> :
                    <View style={styles.modalContent}>
                        <ActivityIndicator size='large' color={'#1559DC'} />
                    </View>}
            </View>
        </Modal>
        <View style={styles.buttons}>
            <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <Pressable onPress={() => navigation.navigate('Ques')} style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>FAQ</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>View the most asked questions </Text>
                </Pressable>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View>
            {vehicle != null ? <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <View style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>Switch Vehicle</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>Change the currently active vehicle</Text>
                </View>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View> : <View style={{ height: 80 }} />}
            {vehicle != null ? <View style={styles.faq}>
                <View style={styles.faq2}></View>
                <Pressable onPress={() => showPopUp(true)} style={styles.faq1}>
                    <Text style={{ fontSize: 15, color: '#ffff' }}>Share Vehicle</Text>
                    <Text style={{ fontSize: 10, color: '#8D8A8A' }}>Share the currently active vehicle</Text>
                </Pressable>
                <View style={styles.faq2}>
                    <AntDesign name="right" size={10} color="white" />
                </View>
            </View> : <View style={{ height: 80 }} />}
            <View style={{ height: 80 }} />
        </View>
        <View style={styles.signout}>
            <Pressable onPress={async () => {
                await SecureStore.deleteItemAsync("alpaDrive-user");
                await SecureStore.deleteItemAsync("alpaDrive-vehicles");
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
                navigation.navigate('Login');
            }}>
                <Text style={{ fontSize: 15, color: 'white' }}>SIGN OUT</Text>
            </Pressable>
            <Text style={{ fontSize: 10, color: '#8D8A8A' }}>v0.1.0</Text>
            <Text style={{ fontSize: 8, color: '#8D8A8A' }}>Designed by alpaDrive</Text>
        </View>
    </SafeAreaView>
}

export default Profile