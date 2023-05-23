import * as React from 'react';
import { Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


const Empty = ({ navigation }) => {
  return (
    <SafeAreaView style={ styles.root }>
      <View style={ { flex: 0.5 } }></View>
      <View style={ { flex: 1, flexDirection: 'row' } }>
        <View style={ { flex: 0.3 } }></View>
        <View style={ { flex: 3, justifyContent: 'center', alignItems: 'center' } }>
          <Image source={ require('../../assets/logo.png') } />
        </View>
        <Pressable onPress={ () => navigation.navigate('Profile') } style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
          <Feather name="user" size={ 24 } color="white" />
        </Pressable>
      </View>
      <View style={ styles.center }>
        <Text style={ { color: 'white', fontSize: 17 } }>You haven’t added any vehicles yet !</Text>
      </View>
      <TouchableOpacity onPress={ () => navigation.navigate('Pairing') } style={ styles.bottom }>
        <View>
          <View style={ styles.button }>
            <Ionicons name="add" size={ 24 } color="white" />
            <Text style={ { color: 'white', fontSize: 15 } }>Add Vehicle</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Empty;
