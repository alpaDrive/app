import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles';

const Connect = ({navigation}) => {
  const [ fuelPercentage, setFuelPercentage ] = useState(60);
  const [ gear, setGear ] = useState(3);
  const [ speed, setSpeed ] = useState(45);
  const [ rpm, setRpm ] = useState(70);
  const [ coolTemp, setcoolTemp ] = useState(38);

  const [ isFlipped, setIsFlipped ] = useState(false);
  const [ text1, setText1 ] = useState('43,500');
  const [ text2, setText2 ] = useState('Total');
  const [ isLeftArrowVisible, setIsLeftArrowVisible ] = useState(true);
  const [ isRightArrowVisible, setIsRightArrowVisible ] = useState(true);

  const handleLeftArrowClick = () => {
    if (!isFlipped) {
      setText1('23');
      setText2('Trip A');
      setIsLeftArrowVisible(false);
    } else {
      setText1('43,500');
      setText2('Total');
      setIsRightArrowVisible(true);
    }
    setIsFlipped(!isFlipped);
  };

  const handleRightArrowClick = () => {
    if (!isFlipped) {
      setText1('57');
      setText2('Trip B');
      setIsRightArrowVisible(false);
      setIsLeftArrowVisible(true);
    } else {
      setText1('43,500');
      setText2('Total');
      setIsLeftArrowVisible(true);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.titleview }>
        <View style={ styles.titleflex }><Text style={ styles.title }>ALPADRIVE</Text></View>
        <View style={ styles.titleempty }></View>
        <View style={ styles.iconflex }>
          <Feather name="user" size={ 29 } color="white" />
        </View>
      </View>
      <View style={ styles.gearview }>
        <View style={ styles.endflex }></View>
        <View style={ styles.gearflex }>
          <View style={ styles.vehicle }>
            <View style={ styles.model }><Text style={ styles.modeltext }>Octavia</Text></View>
            <View style={ styles.company }><Text style={ styles.companytext }>Skoda</Text></View>
          </View>
          <View style={ styles.gearempty }></View>
          <View style={ styles.gearpos }>
            <View style={ styles.gearno }><Text style={ styles.gearnotext }>{ gear }</Text></View>
            <View style={ styles.gear }><Text style={ styles.geartext }>Gear</Text></View>
          </View>
        </View>
        <View style={ styles.endflex }></View>
      </View>
      <View style={ styles.speedview }>
        <View style={ styles.upper }>
          <View style={ styles.rpmempty }></View>
          <View style={ styles.speedflex }>
            <View style={ styles.speedometer }>
              <ProgressCircle
                percent={ speed }
                radius={ 90 }
                borderWidth={ 9 }
                color="white"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={ 20 }>
                <Text style={ styles.kilometer }>km/h</Text>
                <Text style={ styles.speedcom }>{ speed }</Text>
              </ProgressCircle>
            </View>
          </View>
          <View style={ styles.tempempty }></View>
        </View>
        <View style={ styles.lower }>
          <View style={ styles.rpmflex }>
            <View style={ styles.rpmtemp }>
              <ProgressCircle
                percent={ rpm }
                radius={ 50 }
                borderWidth={ 5 }
                color="#1559DC"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={ 20 }>
                <Text style={ styles.rpmtext }>RPM</Text>
                <Text style={ styles.rpmcom }>{ rpm }</Text>
              </ProgressCircle>
            </View>
          </View>
          <View style={ styles.speedempty }></View>
          <View style={ styles.tempflex }>
            <View style={ styles.rpmtemp }>
              <ProgressCircle
                percent={ coolTemp }
                radius={ 50 }
                borderWidth={ 5 }
                color="#1559DC"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={ 20 }>
                <View style={ styles.tempcom }>
                  <MaterialCommunityIcons name="coolant-temperature" size={ 32 } color="white" />
                </View>
              </ProgressCircle>
            </View>
          </View>
        </View>
      </View>
      <View style={ styles.fuelview }>
        <View style={ styles.fuelflex }><Text style={ styles.fueltext }>
          <FontAwesome5 name="gas-pump" size={ 20 } color="white" />
          <Text style={ styles.subtext }>  Fuel</Text> (estimated 250km remaining) <Text style={ styles.subtext }> { fuelPercentage }%</Text></Text></View>
        <View style={ styles.fuelmeter }>
          <View style={ styles.meterout }>
            <View style={ [ styles.meterin, { width: `${ fuelPercentage }%` } ] }></View>
          </View>
        </View>
      </View>
      <View style={ styles.odoview }>
        <View style={ styles.arrowflex }>
          { isLeftArrowVisible && (
            <TouchableOpacity style={ styles.button } onPress={ handleLeftArrowClick }>
              <MaterialIcons name="keyboard-arrow-left" size={ 30 } color="white" />
            </TouchableOpacity>
          ) }
        </View>
        <View style={ styles.odoflex }>
          <View style={ styles.odocom }>
            <Text style={ styles.odono }>{ text1 } km</Text>
            <Text style={ styles.odotext }>{ text2 }</Text></View>
        </View>
        <View style={ styles.arrowflex }>
          { isRightArrowVisible && (
            <TouchableOpacity style={ styles.button } onPress={ handleRightArrowClick }>
              <MaterialIcons name="keyboard-arrow-right" size={ 30 } color="white" />
            </TouchableOpacity>
          ) }
        </View>
      </View>
      <Pressable onPress={ () => navigation.navigate('Daily') } style={ styles.statview }>
        <View style={ styles.statflex }>
          <View style={ styles.stattext }>
            <Text style={ styles.usage }>Usage stats</Text>
            <Text style={ styles.periodic }>Periodic stats, health report</Text>
          </View>
          <View style={ styles.statarrow }>
            <MaterialIcons name="keyboard-arrow-right" size={ 30 } color="black" />
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Connect;