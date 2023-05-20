import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import Modal from 'react-native-modal';
import styles from './styles';

const Pairing = () => {
    const [ flash, setFlash ] = useState(Camera.Constants.FlashMode.off);
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ isQRCodeDetected, setIsQRCodeDetected ] = useState(false);
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ qrCodeData, setQRCodeData ] = useState(null);
    const [ input1, setInput1 ] = useState('');
    const [ input2, setInput2 ] = useState('');
    const cameraRef = React.useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleTorch = () => {
        setFlash(
            flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
        );
    };

    const focusArea = {
        x: 0.2, // left position
        y: 0.2, // top position
        width: 0.6, // width of the area
        height: 0.6, // height of the area
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setIsQRCodeDetected(false);
        setQRCodeData(null);
    };

    const handleSend = () => {
        if (!input1 || !input2) {
            Alert.alert('Oops', "You can't leave a field blank!");
        } else {
            const dataToSend = {
                input1,
                input2,
            };
            // Send the data
        }
    };

    useEffect(() => {
        if (isQRCodeDetected && qrCodeData) {
            try {
                const parsedData = JSON.parse(qrCodeData);

                // Check if the parsed data contains a valid vehicle ID (vid) and initial value
                if (parsedData && parsedData.vid && parsedData.initial) {
                    setIsModalVisible(true); // Show the modal
                    Vibration.vibrate(); // Vibrate when QR code is detected
                } else {
                    Alert.alert('Error', 'Invalid QR code');
                }
            } catch (error) {
                Alert.alert('Error', 'Invalid QR code');
            }
        }
    }, [ isQRCodeDetected, qrCodeData ]);

    const handleBarCodeScanned = ({ data }) => {
        setIsQRCodeDetected(true);
        setQRCodeData(data);
    };

    return (
        <SafeAreaView style={ styles.rootp }>
            <View style={ styles.headerp }>
                <View style={ { flex: 0.5 } }></View>
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { flex: 0.3 } }></View>
                    <View style={ { flex: 3, justifyContent: 'center', alignItems: 'center' } }>
                        <Image source={ require('../../assets/logo.png') } />
                    </View>
                    <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                        <TouchableOpacity onPress={ handleTorch }>
                            { flash === Camera.Constants.FlashMode.off ? (
                                <Ionicons name="flash-off-sharp" size={ 24 } color="white" />
                            ) : (
                                <Ionicons name="flash" size={ 24 } color="white" />
                            ) }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            { hasPermission ? (
                <React.Fragment>
                    <Camera
                        style={ styles.camera }
                        type={ Camera.Constants.Type.back }
                        flashMode={ flash }
                        ref={ cameraRef }
                        ratio="16:9" // set the desired aspect ratio here
                        rectOfInterest={ focusArea }
                        onBarCodeScanned={ isQRCodeDetected ? undefined : handleBarCodeScanned }
                    />
                    { isQRCodeDetected && (
                        <View style={ styles.vibrationOverlay }>
                            {/* Customize the vibration effect overlay as needed */ }
                            <Text style={ styles.vibrationText }>QR code detected</Text>
                        </View>
                    ) }
                </React.Fragment>
            ) : (
                <Text>No camera permission granted</Text>
            ) }
            <View style={ styles.bottom1 }>
                <View style={ styles.text }>
                    <Text style={ { color: 'white', justifyContent: 'center', alignItems: 'center' } }>
                        Scan the QR code on your device
                    </Text>
                </View>
            </View>
            <Modal isVisible={ isModalVisible } animationIn="fadeIn" animationOut="fadeOut">
                <View style={ styles.modalContainer_pairing }>
                    <View style={ styles.modalContent_Pairing }>
                        <View style={ { flex: 2, justifyContent: 'flex-end', alignItems: 'center' } }>
                            <TextInput
                                style={ styles.input }
                                value={ input1 }
                                onChangeText={ (text) => setInput1(text) }
                                placeholder="Enter your car name"
                            />
                        </View>
                        <View style={ { flex: 2, justifyContent: 'center', alignItems: 'center' } }>
                            <TextInput
                                style={ styles.input }
                                value={ input2 }
                                onChangeText={ (text) => setInput2(text) }
                                placeholder="Enter the brand name"
                            />
                        </View>
                        <View style={ { flex: 1.5, flexDirection: 'row' } }>
                            <TouchableOpacity
                                style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }
                                onPress={ handleModalClose }
                            >
                                <Text style={ { color: 'white' } }>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }
                                onPress={ handleSend }
                            >
                                <Text style={ { color: 'white' } }>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Pairing;

