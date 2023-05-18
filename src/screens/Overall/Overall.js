import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProgressBar from './ProgressBar';
import styles from './styles';


const Overall = ({ navigation }) => {

    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const openModal = () => {
        setIsModalVisible(true);
    };

    //Details fetch from the server
    const details = [
        { label: 'Total km', value: '53000 km' },
        { label: 'Mileage', value: '19 km/Lt' },
        { label: 'Average Speed', value: '45 km/hr' },
        { label: 'Top end Speed', value: '130 km' },
    ];


    const closeModal = () => {
        setIsModalVisible(false);
    };

    const navigateToDaily = () => {
        // Navigate to the Daily screen
        closeModal();
    };

    const navigateToPeriodic = () => {
        // Navigate to the overall screen
        closeModal();
    };



    return <SafeAreaView style={ { flex: 1, backgroundColor: '#00000D' } }>
        <View style={ { flex: 3, flexDirection: 'row' } }>
            <View style={ { flex: 0.5, } }></View>
            <Pressable style={ { flex: 10, justifyContent: 'center' } }>
                <Ionicons name="chevron-back" size={ 24 } color="white" />
            </Pressable>
        </View>
        <View style={ { flex: 2, justifyContent: 'center', alignItems: 'center' } }>
            <View style={ { flex: 2, justifyContent: 'flex-start', alignItems: 'center' } }>
                <View style={ styles.slection_button }>
                    <Pressable style={ { flex: 3, justifyContent: 'center', alignItems: 'center' } }>
                        <Text style={ { color: 'white', fontSize: 15 } }>Overall</Text>
                    </Pressable>
                    <Pressable onPress={ openModal } style={ { flex: 1, justifyContent: 'center', alignItems: 'flex-start' } }>
                        <AntDesign name="caretdown" size={ 15 } color="white" />
                        <Modal visible={ isModalVisible } transparent animationType="slide">
                            <View style={ styles.modalContainer }>
                                <View style={ styles.modalContent }>
                                    <Pressable onPress={ () => navigation.navigate('Daily') } style={ styles.modalButton }>
                                        <Text style={ styles.modalButtonText }>Daily</Text>
                                    </Pressable>
                                    <Pressable onPress={ () => navigation.navigate('Periodic') } style={ styles.modalButton }>
                                        <Text style={ styles.modalButtonText }>Periodic</Text>
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
        </View>
        <View style={ { flex: 5, justifyContent: 'center', alignItems: 'center' } }>
            <ProgressBar />
        </View>
        <View style={ { flex: 6 } }>
            { details.map((detail, index) => (
                <View key={ index } style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { flex: 0.5 } }></View>
                    <View style={ { flex: 2, justifyContent: 'center', alignItems: 'flex-start' } }>
                        <Text style={ { color: 'white', fontSize: 15 } }>{ detail.label }</Text>
                    </View>
                    <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
                        <Text style={ { color: 'white', fontSize: 15 } }>{ detail.value }</Text>
                    </View>
                    <View style={ { flex: 0.5 } }></View>
                </View>
            )) }
            <View style={ { flex: 0.5 } }></View>
        </View>
    </SafeAreaView>
}

export default Overall