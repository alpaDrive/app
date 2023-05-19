import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const Daily = ({ navigation }) => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ date, setDate ] = useState(new Date());
    const [ picker, showPicker ] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        showPicker(false);
    };

    //Details fetch from server  
    const details = [
        { label: 'Distance Travelled', value: '130km' },
        { label: 'Average Speed', value: '42km/hr' },
        { label: 'Maximum Speed', value: '50km/hr' },
        { label: 'Last Odometer', value: '170km' },
        { label: 'Estimated time of use', value: '~3 hr' },
    ];

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const navigateToPeriodic = () => {
        // Navigate to the periodic screen
        closeModal();
    };

    const navigateToOverall = () => {
        // Navigate to the overall screen
        closeModal();
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

    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: '#00000D' } }>
            <View style={ { flex: 1, flexDirection: 'row' } }>
                <View style={ { flex: 0.5 } }></View>
                <Pressable style={ { flex: 10, justifyContent: 'center' } }>
                    <Ionicons name="chevron-back" size={ 24 } color="white" />
                </Pressable>
            </View>
            { picker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={ date }
                    mode="date"
                    is24Hour={ true }
                    onChange={ handleDateChange }
                />
            ) }
            <View style={ { flex: 2, justifyContent: 'center', alignItems: 'center' } }>
                <View style={ styles.slection_button }>
                    <View style={ { flex: 3, justifyContent: 'center', alignItems: 'center' } }>
                        <Text style={ { color: 'white', fontSize: 15 } }>Daily</Text>
                    </View>
                    <Pressable onPress={ openModal } style={ { flex: 1, justifyContent: 'center', alignItems: 'flex-start' } }>
                        <AntDesign name="caretdown" size={ 15 } color="white" />
                        <Modal visible={ isModalVisible } transparent animationType="slide">
                            <View style={ styles.modalContainer }>
                                <View style={ styles.modalContent }>
                                    <Pressable onPress={ () => navigation.navigate('Periodic') } style={ styles.modalButton }>
                                        <Text style={ styles.modalButtonText }>Periodic</Text>
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
            <View style={ { flex: 4, justifyContent: 'center', alignItems: 'center' } }>
                <View style={ styles.date_box }>
                    <TouchableOpacity onPress={ () => goToPreviousDate() } style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                        <AntDesign name="left" size={ 15 } color="white" />
                    </TouchableOpacity>
                    <View style={ { flex: 5 } }>
                        <View style={ { flex: 1 } }></View>
                        <View style={ { flex: 2 } }>
                            <Pressable onPress={ () => showPicker(true) } style={ styles.left_right_space }>
                                <Text style={ { color: 'white', fontWeight: '300', fontSize: 18 } }>{ date.toDateString() }</Text>
                            </Pressable>
                            <View style={ { flex: 1, justifyContent: 'flex-end', alignItems: 'center' } }>
                                <Text style={ { color: 'gray' } }>2 STRESS EVENTS</Text>
                            </View>
                            <View style={ styles.left_right_space }>
                                <Text style={ { color: 'gray' } }>~ 0.3% degradation</Text>
                            </View>
                        </View>
                        <View style={ { flex: 1 } }></View>
                    </View>
                    <TouchableOpacity onPress={ () => goToNextDate() } style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                        <AntDesign name="right" size={ 15 } color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={ { flex: 5 } }>
                { details.map((detail, index) => (
                    <View key={ index } style={ { flex: 1, flexDirection: 'row' } }>
                        <View style={ { flex: 0.5 } }></View>
                        <View style={ styles.list_style }>
                            <Text style={ { color: 'white', fontSize: 15 } }>{ detail.label }</Text>
                        </View>
                        <View style={ styles.list_style }>
                            <Text style={ { color: 'white', fontSize: 15 } }>{ detail.value }</Text>
                        </View>
                        <View style={ { flex: 0.5 } }></View>
                    </View>
                )) }
                <View style={ { flex: 0.8 } }></View>
            </View>
        </SafeAreaView>
    );
};

export default Daily;
