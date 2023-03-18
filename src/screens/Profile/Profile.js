import * as React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Profile = () => {
    return <SafeAreaView style={ styles.root }>
        <View style={ styles.header }>
            <View style={ styles.profile }>
                <View style={ styles.icon }>
                    <AntDesign name="user" size={ 30 } color="black" />
                </View>
            </View>
            <View style={ styles.details }>
                <Text style={ styles.user }>Name</Text>
                <Text>samplemail@gamil.com</Text>
            </View>
        </View>
        <View style={ styles.buttons }>
            <View style={ styles.faq }>
                <View style={ styles.faq2 }></View>
                <View style={ styles.faq1 }>
                    <Text style={ { fontSize: 15, color: '#ffff' } }>FAQ</Text>
                    <Text style={ { fontSize: 10, color: '#8D8A8A' } }>View the most asked questions </Text>
                </View>
                <View style={ styles.faq2 }>
                    <AntDesign name="right" size={ 10 } color="black" />
                </View>
            </View>
            <View style={ styles.faq }>
                <View style={ styles.faq2 }></View>
                <View style={ styles.faq1 }>
                    <Text style={ { fontSize: 15, color: '#ffff' } }>Switch Vehicle</Text>
                    <Text style={ { fontSize: 10, color: '#8D8A8A' } }>Change the currently active vehicle</Text>
                </View>
                <View style={ styles.faq2 }>
                    <AntDesign name="right" size={ 10 } color="black" />
                </View>
            </View>
            <View style={ styles.faq }>
                <View style={ styles.faq2 }></View>
                <View style={ styles.faq1 }>
                    <Text style={ { fontSize: 15, color: '#ffff' } }>Dummy Option</Text>
                    <Text style={ { fontSize: 10, color: '#8D8A8A' } }>To be implemented in a future release</Text>
                </View>
                <View style={ styles.faq2 }>
                    <AntDesign name="right" size={ 10 } color="black" />
                </View>
            </View>
            <View style={ styles.faq }>
                <View style={ styles.faq2 }></View>
                <View style={ styles.faq1 }>
                <Text style={ { fontSize: 15, color: '#ffff' } }>Dummy Option</Text>
                    <Text style={ { fontSize: 10, color: '#8D8A8A' } }>To be implemented in a future release</Text>
                </View>
                <View style={ styles.faq2 }>
                    <AntDesign name="right" size={ 10 } color="black" />
                </View>
            </View>
        </View>
        <View style={ styles.signout }>
            <Text style={ { fontSize: 15, color: '#8D8A8A' } }>sign out</Text>
            <Text style={ { fontSize: 10, color: '#8D8A8A' } }>v0.1..0</Text>
            <Text style={ { fontSize: 8, color: '#8D8A8A' } }>Designed by alpaDrive</Text>
        </View>
    </SafeAreaView>
}

export default Profile