import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import styles from './styles';

const Pairing = () => {
    const [ flash, setFlash ] = useState(Camera.Constants.FlashMode.off);
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ isQRCodeDetected, setIsQRCodeDetected ] = useState(false);
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
                        onBarCodeScanned={ () => {
                            if (!isQRCodeDetected) {
                                setIsQRCodeDetected(true);
                                Vibration.vibrate(); // Vibrate when QR code is detected
                            }
                        } }
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
                    <Text style={ { color: 'white', justifyContent: 'center', alignItems: 'center' } }>Scan the QR code on your device</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Pairing;
