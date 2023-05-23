import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import configs from '../../../../assets/configs';

const Daily = ({ onSwitch, onBack, vid }) => {

    const [date, setDate] = useState(new Date());
    const [picker, showPicker] = useState(false);
    const [details, setDetails] = useState([])
    const [buffering, setBuffering] = useState(false)
    const [stress, setStress] = useState('')
    const [degradation, setDegradation] = useState('')

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        showPicker(false);
    };

    const goToNextDate = () => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        setDate(nextDate);
    };

    const goToPreviousDate = () => {
        const previousDate = new Date(date);
        previousDate.setDate(previousDate.getDate() - 1);
        setDate(previousDate);
    };

    const refresh = async () => {
        try {
            setBuffering(true)
            const response = await fetch(`https://${configs.SERVER_URL}/logs/daily`, {
                method: 'POST',
                headers: new Headers(),
                body: JSON.stringify({
                    "vid": vid,
                    "date": `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
                })
            })
            const body = await response.json();
            if (response.ok) {
                setDetails([
                    { label: 'Distance travelled', value: `${body.distance_travelled}kms` },
                    { label: 'Average Speed', value: `${body.average_speed}km/hr` },
                    { label: 'Maximum Speed', value: `${body.max_speed.speed}km/hr` },
                    { label: 'Last odometer', value: `${body.last_odometer}kms` },
                    { label: 'Estimated time of running', value: `~ ${parseFloat(body.distance_travelled / body.average_speed).toFixed(1)} hrs` }
                ])
                setStress(body.stress_count)
                setDegradation(body.degradation)
            } else setDetails([])
        } catch (error) { console.error(error) }
        setBuffering(false)
    }

    React.useEffect(() => {
        refresh()
    }, [date])

    return <>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}></View>
            <Pressable onPress={onBack} style={{ flex: 10, justifyContent: 'center' }}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
        </View>
        {picker ?
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                onChange={handleDateChange}
            />
            : null}
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable onPress={onSwitch} style={styles.slection_button}>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Daily</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <AntDesign name="caretdown" size={15} color="white" />
                </View>
            </Pressable>
        </View>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.date_box}>
                <TouchableOpacity onPress={() => goToPreviousDate()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="left" size={15} color="white" />
                </TouchableOpacity>
                <View style={{ flex: 5 }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 2 }}>
                        <Pressable onPress={() => showPicker(true)} style={styles.left_right_space}>
                            <Text style={{ color: 'white', fontWeight: '300', fontSize: 18 }}>{date.toDateString()}</Text>
                        </Pressable>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ color: 'gray' }}>{details.length > 0 || buffering ? `${stress} STRESS EVENTS` : 'NO DATA AVAILABLE'}</Text>
                        </View>
                        <View style={styles.left_right_space}>
                            <Text style={{ color: 'gray' }}>{buffering ? 'Please wait...' : details.length > 0 ? `~ ${degradation}% degradation` : 'Try with a different date'}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <TouchableOpacity onPress={() => goToNextDate()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="right" size={15} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
            {buffering ? <ActivityIndicator color={'#07142F'} size={'large'} /> : details.map((detail, index) => (
                <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={styles.list_style}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{detail.label}</Text>
                    </View>
                    <View style={styles.list_value_style}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{detail.value}</Text>
                    </View>
                    <View style={{ flex: 0.5 }}></View>
                </View>
            ))}
            <View style={{ flex: 0.8 }}></View>
        </View>
    </>
};

export default Daily;
