import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video } from 'expo-av';
import configs from '../../assets/configs';
import { Dimensions, SafeAreaView, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles'

const Player = ({ route, navigation }) => {

    const { vid, uid, name, date, time } = route.params;

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        };
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.header}>
                <View style={styles.button}>
                    <AntDesign name="left" onPress={() => navigation.goBack()} size={24} color="white" />
                </View>
                <View style={styles.info}>
                    <Text style={styles.date}>27 January, 2007</Text>
                    <Text style={styles.time}>10:00 AM</Text>
                </View>
            </View>
            <View style={styles.video}>
                <Video
                    source={{ uri: `https://${configs.CDS_URL}/video/stream/${vid}/${uid}/${name}` }}
                    rate={1.0}
                    volume={1.0}
                    isMuted
                    resizeMode="cover"
                    shouldPlay
                    useNativeControls
                    style={{ width: Dimensions.get('window').height / 1.1, height: Dimensions.get('window').width / 1.3 }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Player;
