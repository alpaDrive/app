import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Periodic = ({ navigation }) => {

    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ fromDate, setFromDate ] = useState(new Date());
    const [ toDate, setToDate ] = useState(new Date());
    const [ showPicker, setShowPicker ] = useState(false);

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

    //Details fetch from the server
    const periodicDetails = [
        { name: 'Distance Travelled', value: '130km' },
        { name: 'Average Speed', value: '42km/hr' },
        { name: 'Maximum Speed', value: '50km/hr' },
        { name: 'Last Odometer', value: '170km' },
        { name: 'Estimated time of use', value: '~3 hr' },
    ];

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const navigateToDaily = () => {
        // Navigate to the daily screen
        closeModal();
    };

    const navigateToOverall = () => {
        // Navigate to the overall screen
        closeModal();
    };

    return <SafeAreaView style={ { flex: 1, backgroundColor: '#00000D' } }>
        <View style={ { flex: 2, flexDirection: 'row' } }>
            <View style={ { flex: 0.5, } }></View>
            <Pressable style={ { flex: 10, justifyContent: 'center' } }>
                <Ionicons name="chevron-back" size={ 24 } color="white" />
            </Pressable>
        </View>
        <View style={ { flex: 2, justifyContent: 'flex-start', alignItems: 'center' } }>
            <View style={ styles.slection_button }>
                <Pressable onPress={ openModal } style={ { flex: 3, justifyContent: 'center', alignItems: 'center' } }>
                    <Text style={ { color: 'white', fontSize: 15 } }>Periodic</Text>
                </Pressable>
                <Pressable onPress={ openModal } style={ { flex: 1, justifyContent: 'center', alignItems: 'flex-start' } }>
                    <AntDesign name="caretdown" size={ 15 } color="white" />
                    <Modal visible={ isModalVisible } transparent animationType="slide">
                        <View style={ styles.modalContainer }>
                            <View style={ styles.modalContent }>
                                <Pressable onPress={ () => navigation.navigate('Daily') } style={ styles.modalButton }>
                                    <Text style={ styles.modalButtonText }>Daily</Text>
                                </Pressable>
                                <Pressable onPress={ () => navigation.navigate('Overall') } style={ styles.modalButton }>
                                    <Text style={ styles.modalButtonText }>Overall</Text>
                                </Pressable>
                                <Pressable onPress={ closeModal } style={ styles.modalButton }>
                                    <Text style={ styles.modalButtonText }>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </Pressable>
            </View>
        </View>
        { showPicker && (
            <DateTimePicker
                testID="dateTimePicker"
                value={ showPicker === 'from' ? fromDate : toDate }
                mode="date"
                is24Hour={ true }
                onChange={ handleDateChange }
            />
        ) }
        <View style={ { flex: 5 } }>
            <View style={ { flex: 5, flexDirection: 'row' } }>
                <Pressable onPress={ () => setShowPicker('from') } style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                    <View style={ styles.date_box1 }>
                        <View style={ { flex: 1 } }></View>
                        <View style={ { flex: 0.5, justifyContent: 'flex-end', alignItems: 'center' } }>
                            <Text style={ { color: '#1559DC' } }>From</Text>
                        </View>
                        <View style={ { flex: 2, justifyContent: 'center', alignItems: 'center' } }>
                            <Text style={ { color: 'white', fontSize: 20, fontWeight: '300' } }>{ fromDate.toDateString() }</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.line}></View>
                <Pressable onPress={ () => setShowPicker('to') } style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                    <View style={ styles.date_box2 }>
                        <View style={ { flex: 1 } }></View>
                        <View style={ { flex: 0.5, justifyContent: 'center', alignItems: 'center' } }>
                            <Text style={ { color: '#1559DC' } }>TO</Text>
                        </View>
                        <View style={ { flex: 2, justifyContent: 'center', alignItems: 'center' } }>
                            <Text style={ { color: 'white', fontSize: 20, fontWeight: '300' } }>{ toDate.toDateString() }</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={ { flex: 3 } }>
                <View style={ { flex: 1, justifyContent: 'flex-end', alignItems: 'center' } }>
                    <Text style={ { color: 'gray' } }>2 STRESS EVENTS</Text>
                </View>
                <View style={ { flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' } }>
                    <Text style={ { color: 'gray' } }>~ 0.3% degradation</Text>
                </View>
            </View>
            <View style={ { flex: 0.5 } }></View>
        </View>
        <View style={ { flex: 7 } }>
            { periodicDetails.map((detail, index) => (
                <View key={ index } style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { flex: 0.5 } }></View>
                    <View style={ styles.periodic_details_name }>
                        <Text style={ styles.periodic_text }>{ detail.name }</Text>
                    </View>
                    <View style={ styles.periodic_details_values }>
                        <Text style={ styles.periodic_text }>{ detail.value }</Text>
                    </View>
                    <View style={ { flex: 0.3 } }></View>
                </View>
            )) }
            <View style={ { flex: 0.8 } }></View>
        </View>
    </SafeAreaView >
}

export default Periodic