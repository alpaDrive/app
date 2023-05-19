import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles'
import { Feather } from '@expo/vector-icons';;
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    const [ location, setLocation ] = useState(null);
    const [ brandName, setBrandName ] = useState('');
    const [ vehicleRpm, setVehicleRpm ] = useState('');
    const [ model, setModel ] = useState('');
    const [ gearPosition, setGearPositon ] = useState('')
    const [ speed, setSpeed ] = useState('');
    const [ fuel, setFuel ] = useState('');

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

            //responses
            try {
                const response = await fetch('your-server-endpoint');
                if (!response.ok) {
                    throw new Error('Error fetching data from server');
                }
                const data = await response.json();
                setBrandName(data.brandName);
                setVehicleRpm(data.rpm)
                setModel(data.model);
                setGearPositon(data.gear)
                setSpeed(data.speed);
                setFuel(data.fuel);
            } catch (error) {
                console.error('Error fetching data from server:', error);
            }

        })();
    }, []);

    return (
        <View style={ styles.main_container }>
            {/* <View style={ styles.profile }>
                <View style={ styles.profile_container }>
                    <Feather name="user" size={ 24 } color="white" />
                </View>
            </View> */}
            <View style={ styles.map_container }>
                <View style={ styles.container }>
                    { location && (
                        <MapView
                            style={ styles.map }
                            region={ {
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            } }
                        >
                            <Marker
                                coordinate={ { latitude: location.latitude, longitude: location.longitude } }
                                title="Your Location"
                            />
                        </MapView>
                    ) }
                </View>
                <View style={ styles.bottom_container }>
                    <View style={ styles.brand_name }>
                        <View style={ styles.brand }>
                            <Text style={ { fontSize: 25, color: 'white', } }>Octavia</Text>
                            <View style={ { flex: 0.3 } }></View>
                            <Text style={ { color: 'white' } }>4500 r/min</Text>
                        </View>
                        <View style={ styles.model }>
                            <Text style={ { fontSize: 17, color: 'gray' } }>skoda</Text>
                            <View style={ { flex: 0.3 } }></View>
                            <Text style={ { color: 'gray' } }>3rd Gear</Text>
                        </View>
                    </View>
                    <View style={ styles.kilometers }>
                        <Text style={ { color: 'white', fontSize: 20 } }>45 km/hr</Text>
                        <View style={ { flex: 0.3 } }></View>
                        <Text style={ { color: 'white' } }><FontAwesome5 name="gas-pump" size={ 24 } color="white" /> 70%</Text>
                    </View>
                    <Pressable onPress={ () => navigation.navigate('Connect') } style={ styles.know_more }>
                        <View style={ styles.know_box }>
                            <View style={ { flex: 3, justifyContent: 'center', alignItem: 'center' } }>
                                <Text style={ { fontSize: 15, marginLeft: 15, fontWeight: '700' } }>Know more</Text>
                                <Text style={ { color: 'gray', marginLeft: 15 } }>Live vehicle console, other stata</Text>
                            </View>
                            <View style={ { flex: 0.3 } }></View>
                            <View style={ { flex: 0.5, justifyContent: 'center', alignItem: 'flex-start' } }>
                                <Text><MaterialIcons name="keyboard-arrow-right" size={ 24 } color="black" /></Text>
                            </View>
                        </View>
                    </Pressable>
                    <View style={ { flex: .2 } }></View>
                </View>
            </View>

        </View>
    );
};



export default Home;