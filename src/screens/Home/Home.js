import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
import configs from '../../assets/configs';
import styles from './styles';

const Home = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: 0.0, longitude: 0.0 });
    const [details, setDetails] = useState({ make: '', model: '' })
    const [connected, setConnected] = useState(false)

    const [rpm, setRPM] = useState(0)
    const [speed, setSpeed] = useState(0);
    const [fuel, setFuel] = useState(0);
    const [gear, setGear] = useState('Gear N')
    const wsRef = React.useRef(null);
    const reconnectInterval = React.useRef(null);
    let [creds, setCreds] = useState({ uid: '', vid: '' })

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let { coords } = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
                timeout: 20000,
                maximumAge: 1000,
            });
            setLocation(coords);

            try {
                const creds = JSON.parse(await SecureStore.getItemAsync("alpaDrive-user"))
                const response = await fetch(`https://${configs.SERVER_URL}/vehicle/refresh`, {
                    method: 'POST',
                    headers: new Headers(),
                    body: JSON.stringify({
                        "uid": creds.uid.$oid
                    })
                });
                if (!response.ok) {
                    throw new Error('Error fetching data from server');
                }
                const data = await response.json();
                if (data.vehicles.length > 0) {
                    setDetails({ make: data.vehicles[0].company, model: data.vehicles[0].model })
                    setCreds({ vid: data.vehicles[0]._id.$oid, uid: creds.uid.$oid })
                    joinRoom(creds.uid.$oid, data.vehicles[0]._id.$oid)
                }
            } catch (error) {
                console.log(error)
                Alert.alert('Warning', 'Failed to get updated list of vehicles. You maybe viewing an older vehicle.')
            }

        })();
    }, []);

    const joinRoom = (uid, vid) => {
        wsRef.current = new WebSocket(`wss://${configs.SERVER_URL}/join/user/${uid}/${vid}`);

        wsRef.current.onopen = () => {
            clearTimeout(reconnectInterval.current);
            setConnected(true)
        };

        wsRef.current.onmessage = (message) => {
            if (JSON.parse(message.data).mode === 'broadcast') {
                const data = JSON.parse(message.data).message
                setSpeed(data.speed)
                setRPM(data.rpm)
                setGear(`Gear ${data.gear > 0 ? data.gear : 'N'}`)
                if (data.location.latitude > 0 && data.location.longitude > 0) setLocation(data.location)
            }
        };

        wsRef.current.onerror = (e) => {
            console.log('WebSocket error:', e);
        };

        wsRef.current.onclose = () => {
            setConnected(false)
            scheduleReconnect();
        };
    }

    const leaveRoom = () => {
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
            clearTimeout(reconnectInterval.current);
        }
    };

    const scheduleReconnect = () => {
        const delay = 1000; // Delay in milliseconds before attempting to reconnect
        clearTimeout(reconnectInterval.current);
        reconnectInterval.current = setTimeout(() => {
            joinRoom();
        }, delay);
    };

    return (
        <View style={styles.main_container}>
            {/* <View style={ styles.profile }>
                <View style={ styles.profile_container }>
                    <Feather name="user" size={ 24 } color="white" />
                </View>
            </View> */}
            <View style={styles.map_container}>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.1022,
                            longitudeDelta: 0.1021,
                        }}
                    >
                        <Marker
                            coordinate={location}
                            title="Vehicle"
                        />
                    </MapView>
                </View>
                <View style={styles.bottom_container}>
                    <View style={styles.brand_name}>
                        <View style={styles.brand}>
                            <Text style={{ fontSize: 25, color: 'white', }}>{details.model}</Text>
                            <View style={{ flex: 0.3 }}></View>
                            <Text style={{ color: 'white' }}>{connected ? rpm : '--'} r/min</Text>
                        </View>
                        <View style={styles.model}>
                            <Text style={{ fontSize: 17, color: 'gray' }}>{details.make}</Text>
                            <View style={{ flex: 0.3 }}></View>
                            <Text style={{ color: 'gray' }}>{connected ? gear : 'Disconnected'}</Text>
                        </View>
                    </View>
                    <View style={styles.kilometers}>
                        <Text style={{ color: 'white', fontSize: 20 }}>{connected ? speed : '--'} km/hr</Text>
                        <View style={{ flex: 0.3 }}></View>
                        <Text style={{ color: 'white' }}><FontAwesome5 name="gas-pump" size={24} color="white" />{connected ? fuel : '-- '}%</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate('Connect', { uid: creds.uid, vid: creds.vid, make: details.make, model: details.model })} style={styles.know_more}>
                        <View style={styles.know_box}>
                            <View style={{ flex: 3, justifyContent: 'center', alignItem: 'center' }}>
                                <Text style={{ fontSize: 15, marginLeft: 15, fontWeight: '700' }}>Know more</Text>
                                <Text style={{ color: 'gray', marginLeft: 15 }}>Live vehicle console, other stata</Text>
                            </View>
                            <View style={{ flex: 0.3 }}></View>
                            <View style={{ flex: 0.5, justifyContent: 'center', alignItem: 'flex-start' }}>
                                <Text><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
                            </View>
                        </View>
                    </Pressable>
                    <View style={{ flex: .2 }}></View>
                </View>
            </View>

        </View>
    );
};



export default Home;