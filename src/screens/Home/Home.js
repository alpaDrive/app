import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
import configs from '../../assets/configs';
import styles from './styles';

const Home = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: 0.0, longitude: 0.0 });
    const [region, setRegion] = useState({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.1022,
        longitudeDelta: 0.1021,
      });
    const [details, setDetails] = useState({ make: '', model: '' })
    const [connected, setConnected] = useState(false)

    const [rpm, setRPM] = useState(0)
    const [speed, setSpeed] = useState(0);
    const [fuel, setFuel] = useState(0);
    const [gear, setGear] = useState('Gear N')
    const wsRef = React.useRef(null);
    const reconnectInterval = React.useRef(null);
    const uiRef = React.useRef(null)
    let uid = React.useRef(''), vid = React.useRef('')

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

            const creds = JSON.parse(await SecureStore.getItemAsync("alpaDrive-user"))
            try {
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
                    uid.current = creds.uid.$oid, vid.current = data.vehicles[0]._id.$oid
                    joinRoom(creds.uid.$oid, data.vehicles[0]._id.$oid)
                    await SecureStore.setItemAsync("alpaDrive-vehicles", JSON.stringify(data.vehicles))
                }
            } catch {
                const vehicle = JSON.parse(await SecureStore.getItemAsync("alpaDrive-vehicles"))[0]
                Alert.alert('Warning', 'Failed to get updated list of vehicles. You maybe viewing an older vehicle.')
                joinRoom(creds.uid.$oid, vehicle._id.$oid)
                setDetails({ make: vehicle.company, model: vehicle.model })
                uid.current = creds.uid.$oid, vid.current = vehicle._id.$oid;
            }

        })();
    }, []);

    const joinRoom = (uid, vid) => {
        wsRef.current = new WebSocket(`wss://${configs.SERVER_URL}/join/user/${uid}/${vid}`);

        wsRef.current.onopen = () => {
            clearTimeout(reconnectInterval.current);
            uiRef.current = setTimeout(() => setConnected(true), 1000)
        };

        wsRef.current.onmessage = (message) => {
            if (JSON.parse(message.data).mode === 'broadcast') {
                const data = JSON.parse(message.data).message
                setSpeed(data.speed)
                setRPM(data.rpm)
                setFuel(data.fuel)
                setGear(`Gear ${data.gear > 0 ? data.gear : 'N'}`)
                if (data.location.latitude > 0 && data.location.longitude > 0) setLocation(data.location)
            }
        };

        wsRef.current.onerror = (e) => {
            console.log('WebSocket error:', e);
        };

        wsRef.current.onclose = () => {
            if (uiRef.current) clearTimeout(uiRef.current)
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
            joinRoom(uid.current, vid.current);
        }, delay);
    };

    useEffect(() => {
        setRegion({
          ...region,
          latitude: location.latitude,
          longitude: location.longitude,
        });
      }, [location]);

    return (
        <View style={styles.main_container}>
            <View style={styles.map_container}>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={region}
                        provider={PROVIDER_GOOGLE}
                    >
                        <Marker
                            coordinate={location}
                            title="Vehicle"
                        />
                    </MapView>
                    <Pressable onPress={() => navigation.navigate('Profile')} style={styles.profile}>
                        <Feather name="user" size={24} color="white" />
                    </Pressable>
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
                    <Pressable onPress={() => navigation.navigate('Connect', { uid: uid.current, vid: vid.current, make: details.make, model: details.model })} style={styles.know_more}>
                        <View style={styles.know_box}>
                            <View style={{ flex: 3, justifyContent: 'center', alignItem: 'center' }}>
                                <Text style={{ fontSize: 15, marginLeft: 15, fontWeight: '700' }}>Know more</Text>
                                <Text style={{ color: 'gray', marginLeft: 15 }}>Live vehicle console, other stats</Text>
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