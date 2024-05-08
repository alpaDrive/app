import * as React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

export const Recordings = ({ navigation }) => {

    const Card = () => {
        return <View style={styles.card}>
            <View style={styles.top}>
                <Image
                    style={styles.thumbnail}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={styles.play}>
                    <AntDesign name="playcircleo" size={50} color="white" />
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.meta}>
                    <Text style={styles.date}>27 January, 2007</Text>
                    <Text style={styles.time}>10:00 AM</Text>
                </View>
                <View style={styles.actions}>

                    <View style={styles.action}>
                        <Entypo name="share" size={24} color="white" />
                    </View>
                    <View style={styles.action}>
                        <MaterialIcons name="delete" size={24} color="white" />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>
            </View>
        </View>
    }

    return <SafeAreaView style={styles.root}>
        <View style={styles.header}>
            <AntDesign name="left" onPress={() => navigation.goBack()} size={24} color="white" />
            <Text style={styles.name}>Recordings</Text>
        </View>
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.list}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    </SafeAreaView>
}