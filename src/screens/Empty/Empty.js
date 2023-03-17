import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Pairing from '../Pairing/Pairing';

const Empty = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Pairing');
  };
  

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            alpaDrive
          </Text>
        </View>
        <View style={styles.user}>
          <AntDesign name="user" size={24} color="black" />
        </View>
      </View>
      <View style={styles.center}>
        <Text>You haven’t added any vehicles yet</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.bottom}>
        <View>
          <View style={styles.button}>
            <Text style={{ fontSize: 20 }}>+</Text>
            <Text>Add Vehicle</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Empty;
