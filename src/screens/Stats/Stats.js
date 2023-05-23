import * as React from 'react'
import { Modal, View, Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Daily from './components/Daily/Daily'
import Periodic from './components/Periodic/Periodic'
import Overall from './components/Overall/Overall'
import styles from './styles'

export default Stats = ({ navigation, route }) => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const { vid } = route.params
    const screens = [
        <Daily onSwitch={() => setIsModalVisible(true)} vid={vid} onBack={() => navigation.pop()} />,
        <Periodic onSwitch={() => setIsModalVisible(true)} vid={vid} onBack={() => navigation.pop()} />,
        <Overall onSwitch={() => setIsModalVisible(true)} vid={vid} onBack={() => navigation.pop()} />
    ]
    const [screen, setScreen] = React.useState(screens[0])

    return <SafeAreaView style={{ flex: 1, backgroundColor: '#00000D' }}>
        <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} transparent animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {Array.from(['Daily', 'Periodic', 'Overall']).map((item, index) => {
                        return <Pressable key={index} onPress={() => { setScreen(screens[index]); setIsModalVisible(false) }} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>{item}</Text>
                        </Pressable>
                    })}
                </View>
            </View>
        </Modal>
        {screen}
    </SafeAreaView>
}