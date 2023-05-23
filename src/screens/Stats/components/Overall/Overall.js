import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProgressBar from './ProgressBar';
import configs from '../../../../assets/configs';
import styles from './styles';

const Overall = ({ onSwitch, onBack, vid }) => {

    const [details, setDetails] = useState([])
    const [degradation, setDegradation] = useState(0)
    const [buffering, setBuffering] = useState(false)

    const load = async () => {
        try {
            const response = await fetch(`https://${configs.SERVER_URL}/logs/overall`, {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                    "vid": vid,
                })
            })
            const body = await response.json();
            if (response.ok) {
                setDetails([
                    { label: 'Distance travelled', value: `${body.distance_travelled}kms` },
                    { label: 'Average Speed', value: `${body.average_speed}km/hr` },
                    { label: 'Top Speed', value: `${body.max_speed.speed}km/hr` },
                    { label: 'Last odometer', value: `${body.last_odometer}kms` }
                ])
                setDegradation(body.degradation)
            } else setDetails([])
        } catch (error) { console.error(error) }
        setBuffering(false)
    }

    React.useEffect(() => {
        load()
    }, [])

    return <>
        <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ flex: 0.5, }}></View>
            <Pressable onPress={onBack} style={{ flex: 10, justifyContent: 'center' }}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Pressable onPress={onSwitch} style={styles.slection_button}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Overall</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <AntDesign name="caretdown" size={15} color="white" />
                    </View>
                </Pressable>
            </View>
        </View>
        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
            {buffering ? <ActivityIndicator color={'#07142F'} size={'large'} /> : <ProgressBar percentage={details.length > 0 ? parseInt(100 - degradation) : null} />}
        </View>
        <View style={{ flex: 6 }}>
            {details.map((detail, index) => (
                <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{detail.label}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{detail.value}</Text>
                    </View>
                    <View style={{ flex: 0.5 }}></View>
                </View>
            ))}
            <View style={{ flex: 0.5 }}></View>
        </View>
    </>
}

export default Overall