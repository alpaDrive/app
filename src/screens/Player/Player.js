import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video } from 'expo-av';
import configs from '../../assets/configs';
import { SafeAreaView } from 'react-native';

const Player = ({ route }) => {

    const { vid, uid, name } = route.params;

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00000D', justifyContent: 'center', alignItems: 'center' }}>
            <Video
                source={{ uri: `https://${configs.CDS_URL}/video/stream/${vid}/${uid}/${name}` }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls
                style={{ width: 800, height: 300 }}
            />
        </SafeAreaView>
    );
};

export default Player;
