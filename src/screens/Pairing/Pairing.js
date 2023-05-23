import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as SecureStore from 'expo-secure-store';
import Modal from 'react-native-modal';
import configs from '../../assets/configs';
import styles from './styles';

const Pairing = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isQRCodeDetected, setIsQRCodeDetected] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const cameraRef = React.useRef(null);

    let vehicles = []
    let uid = React.useRef('')

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');

            uid.current = JSON.parse(await SecureStore.getItemAsync("alpaDrive-user")).uid.$oid;
            vehicles = JSON.parse(await SecureStore.getItemAsync("alpaDrive-vehicles"));
        })();
    }, []);

    // const handleTorch = () => {
    //     setFlash(
    //         flash === Camera.Constants.FlashMode.off
    //             ? Camera.Constants.FlashMode.torch
    //             : Camera.Constants.FlashMode.off
    //     );
    // };

    const focusArea = {
        x: 0.2, // left position
        y: 0.2, // top position
        width: 0.6, // width of the area
        height: 0.6, // height of the area
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setIsQRCodeDetected(false);
    };

    const handleSend = async () => {
        if (!input1 || !input2)
            Alert.alert('Oops', "You can't leave a field blank!");
        else {
            const response = await fetch(`https://${configs.SERVER_URL}/vehicle/edit`, {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                    "vid": vid,
                    "company": input2,
                    "model": input1
                })
            })
            const body = await response.json()
            if (response.ok) Alert.alert(
                'Welcome aboard!',
                `Your new ${body.document.company} ${body.document.model} has been paired and is ready to go. Open the app to see what you can do with alpaDrive.`,
                [{
                    text: 'Show Me',
                    onPress: () => navigation.navigate('Home'),
                    style: 'default'
                }]
            )
            else Alert.alert('Uh oh!', JSON.stringify(body.error))
        }
    };

    return (
        <SafeAreaView style={styles.rootp}>
            <View style={styles.headerp}>
                <View style={{ flex: 0.5 }}></View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.3 }}></View>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/logo.png')} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {/* <TouchableOpacity onPress={() => {}}>
                            {flash === Camera.Constants.FlashMode.off ? (
                                <Ionicons name="flash-off-sharp" size={24} color="white" />
                            ) : (
                                <Ionicons name="flash" size={24} color="white" />
                            )}
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
            {hasPermission ? (
                <React.Fragment>
                    <BarCodeScanner
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        onBarCodeScanned={isQRCodeDetected ? undefined : async ({ type, data }) => {
                            try {
                                const parsedData = JSON.parse(data);
                                if (parsedData.hasOwnProperty("vid") && parsedData.hasOwnProperty("initial")) {
                                    setIsQRCodeDetected(true)
                                    Vibration.vibrate(10);
                                    for (const each of vehicles)
                                        if (parsedData.vid === each._id.$oid)
                                            Alert.alert(
                                                'We got you!',
                                                'This vehicle has already been paired to your account. If you itend to pair this vehicle to another account, then just sign in to that account on the app, and show the QR code from your acccount',
                                                [
                                                    {
                                                        text: 'Pair Another',
                                                        style: 'cancel'
                                                    },
                                                    {
                                                        text: 'Go Home',
                                                        onPress: () => navigation.navigate('Home'),
                                                        style: 'default'
                                                    }
                                                ]
                                            )
                                    const response = await fetch(`https://${configs.SERVER_URL}/pair/${parsedData.vid}/${uid.current}?initial=${parsedData.initial}`)
                                    const body = await response.json()
                                    if (response.ok || response.status === 500) {
                                        if (parsedData.initial) { setIsModalVisible(true); vid = parsedData.vid; }
                                        else Alert.alert(
                                            'Welcome aboard!',
                                            'Your new vehicle has been paired and is ready to go. Open the app to see what you can do with alpaDrive.',
                                            [{
                                                text: 'Show Me',
                                                onPress: () => navigation.navigate('Home'),
                                                style: 'default'
                                            }]
                                        )
                                    } else Alert.alert('Uh, oh!', JSON.stringify(body.error))
                                }
                            } catch (error) {
                                console.log(error)
                                setIsQRCodeDetected(false)
                            }
                        }}
                        style={styles.camera}
                    />
                    {isQRCodeDetected && (
                        <View style={styles.vibrationOverlay}>
                            {/* Customize the vibration effect overlay as needed */}
                            <Text style={styles.vibrationText}>QR code detected</Text>
                        </View>
                    )}
                </React.Fragment>
            ) : (
                <Text>No camera permission granted</Text>
            )}
            <View style={styles.bottom1}>
                <View style={styles.text}>
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        Scan the QR code on your device
                    </Text>
                </View>
            </View>
            <Modal isVisible={isModalVisible} animationIn="fadeIn" animationOut="fadeOut">
                <View style={styles.modalContainer_pairing}>
                    <View style={styles.modalContent_Pairing}>
                        <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                value={input1}
                                onChangeText={text => setInput1(text)}
                                placeholder="Enter your car name"
                            />
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                value={input2}
                                onChangeText={text => setInput2(text)}
                                placeholder="Enter the brand name"
                            />
                        </View>
                        <View style={{ flex: 1.5, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                onPress={handleModalClose}
                            >
                                <Text style={{ color: 'white' }}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                onPress={handleSend}
                            >
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Pairing;

