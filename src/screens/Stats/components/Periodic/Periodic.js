import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import configs from '../../../../assets/configs';
import styles from './styles';

const Periodic = ({ onSwitch, onBack, vid }) => {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [details, setDetails] = useState([])
    const [stress, setStress] = useState('')
    const [degradation, setDegradation] = useState('')
    const [buffering, setBuffering] = useState(false)
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            if (showPicker === 'from') {
                setFromDate(selectedDate);
            } else {
                setToDate(selectedDate);
            }
        }
        setShowPicker(false);
    };

    const refresh = async () => {
        try {
            setBuffering(true)
            const response = await fetch(`https://${configs.SERVER_URL}/logs/periodic`, {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                    "vid": vid,
                    "start": `${fromDate.getDate()}-${fromDate.getMonth() + 1}-${fromDate.getFullYear()}`,
                    "end": `${toDate.getDate()}-${toDate.getMonth() + 1}-${toDate.getFullYear()}`
                })
            })
            const body = await response.json();
            if (response.ok) {
                setDetails([
                    { label: 'Distance travelled', value: `${body.distance_travelled}kms` },
                    { label: 'Average Speed', value: `${body.average_speed}km/hr` },
                    { label: 'Maximum Speed', value: `${body.max_speed.speed}km/hr` },
                    { label: 'Last odometer', value: `${body.last_odometer}kms` },
                    { label: 'Estimated time of running', value: `~${body.distance_travelled / body.average_speed} hrs` }
                ])
                setStress(body.stress_count)
                setDegradation(body.degradation)
            } else setDetails([])
        } catch (error) { console.error(error) }
        setBuffering(false)
    }

    React.useEffect(() => {
        refresh()
    }, [fromDate, toDate])

    return <>
        <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 0.5, }}></View>
            <Pressable onPress={onBack} style={{ flex: 10, justifyContent: 'center' }}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
        </View>
        <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Pressable onPress={onSwitch} style={styles.slection_button}>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Periodic</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <AntDesign name="caretdown" size={15} color="white" />
                </View>
            </Pressable>
        </View>
        {showPicker && (
            <DateTimePicker
                testID="dateTimePicker"
                value={showPicker === 'from' ? fromDate : toDate}
                mode="date"
                is24Hour={true}
                onChange={handleDateChange}
            />
        )}
        <View style={{ flex: 5 }}>
            <View style={{ flex: 5, flexDirection: 'row' }}>
                <Pressable onPress={() => setShowPicker('from')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.date_box1}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ color: '#1559DC' }}>From</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>{fromDate.toDateString()}</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.line}></View>
                <Pressable onPress={() => setShowPicker('to')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.date_box2}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#1559DC' }}>TO</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>{toDate.toDateString()}</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={{ flex: 3 }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ color: 'gray' }}>{details.length > 0 || buffering ? `${stress} STRESS EVENTS` : 'NO DATA AVAILABLE'}</Text>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ color: 'gray' }}>{buffering ? 'Please wait...' : details.length > 0 ? `~ ${degradation}% degradation` : 'Try with a different date'}</Text>
                </View>
            </View>
            <View style={{ flex: 0.5 }}></View>
        </View>
        <View style={{ flex: 7 }}>
            {buffering ? <ActivityIndicator color={'#07142F'} size={'large'} /> : details.map((detail, index) => (
                <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={styles.periodic_details_name}>
                        <Text style={styles.periodic_text}>{detail.label}</Text>
                    </View>
                    <View style={styles.periodic_details_values}>
                        <Text style={styles.periodic_text}>{detail.value}</Text>
                    </View>
                    <View style={{ flex: 0.3 }}></View>
                </View>
            ))}
            <View style={{ flex: 0.8 }}></View>
        </View>
    </>
}

export default Periodic