import * as React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import styles from './styles';

const Pairing = () => {
    const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
    const [hasPermission, setHasPermission] = React.useState(null);
    const cameraRef = React.useRef(null);

    React.useEffect(() => {
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
    }

    return (
        <SafeAreaView style={styles.rootp}>
            <View style={styles.headerp}>
                <View style={styles.logop}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>alpaDrive</Text>
                </View>
                <TouchableOpacity onPress={handleTorch} style={styles.userp}>
                    <MaterialCommunityIcons name="flashlight" size={24} color={flash === Camera.Constants.FlashMode.off ? "black" : "yellow"} />
                </TouchableOpacity>
            </View>
            {hasPermission ?
                <Camera
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                    flashMode={flash}
                    ref={cameraRef}
                    rectOfInterest={{ x: 0.2, y: 0.2, width: 0.6, height: 0.6 }} // set the camera for a specific area
                /> :
                <Text>No camera permission granted</Text>
            }
            <View style={styles.bottom1}>
                <View style={styles.text}>
                    <Text>Scan the QR code on your device</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Pairing;
