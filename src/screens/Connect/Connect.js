import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle'
import configs from '../../assets/configs'
import styles from './styles';

const Connect = ({ navigation, route }) => {
  const [fuelPercentage, setFuelPercentage] = useState(0);
  const [gear, setGear] = useState('N');
  const [speed, setSpeed] = useState(0);
  const [rpm, setRPM] = useState(0);
  const [coolTemp, setcoolTemp] = useState(0);
  const [connected, setConnected] = useState(false)

  const wsRef = React.useRef(null);
  const reconnectInterval = React.useRef(null);

  const [isFlipped, setIsFlipped] = useState(false);
  const [text1, setText1] = useState('43,500');
  const [text2, setText2] = useState('Total');
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(true);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

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

  const joinRoom = () => {
    wsRef.current = new WebSocket(`wss://${configs.SERVER_URL}/join/user/${route.params.uid}/${route.params.vid}`);

    wsRef.current.onopen = () => {
      clearTimeout(reconnectInterval.current);
      setConnected(true)
    };

    wsRef.current.onmessage = (message) => {
      if (JSON.parse(message.data).mode === 'broadcast') {
        const data = JSON.parse(message.data).message
        setSpeed(data.speed)
        setRPM(data.rpm)
        setGear(`${data.gear > 0 ? data.gear : 'N'}`)
        setcoolTemp(parseInt((data.temp/120)*100))
        setText1(data.odo)
      }
    };

    wsRef.current.onerror = (e) => {
      console.log('WebSocket error:', e);
    };

    wsRef.current.onclose = () => {
      setConnected(false)
      scheduleReconnect();
    };
  }

  const leaveRoom = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
      clearTimeout(reconnectInterval.current);
    }
  };

  const scheduleReconnect = () => {
    const delay = 1000; // Delay in milliseconds before attempting to reconnect
    clearTimeout(reconnectInterval.current);
    reconnectInterval.current = setTimeout(() => {
      joinRoom();
    }, delay);
  };

  React.useEffect(() => {
    joinRoom()
    return () => { leaveRoom() }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleview}>
        <View style={styles.titleflex}><Text style={styles.title}>ALPADRIVE</Text></View>
        <View style={styles.titleempty}></View>
        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.iconflex}>
          <Feather name="user" size={29} color="white" />
        </Pressable>
      </View>
      <View style={styles.gearview}>
        <View style={styles.endflex}></View>
        <View style={styles.gearflex}>
          <View style={styles.vehicle}>
            <View style={styles.model}><Text style={styles.modeltext}>{route.params.model}</Text></View>
            <View style={styles.company}><Text style={styles.companytext}>{route.params.make}</Text></View>
          </View>
          <View style={styles.gearempty}></View>
          <View style={styles.gearpos}>
            <View style={styles.gearno}><Text style={styles.gearnotext}>{connected ? gear : '--'}</Text></View>
            <View style={styles.gear}><Text style={styles.geartext}>Gear</Text></View>
          </View>
        </View>
        <View style={styles.endflex}></View>
      </View>
      <View style={styles.speedview}>
        <View style={styles.upper}>
          <View style={styles.rpmempty}></View>
          <View style={styles.speedflex}>
            <View style={styles.speedometer}>
              <ProgressCircle
                percent={parseInt((speed/200)*100)}
                radius={90}
                borderWidth={9}
                color="white"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={20}>
                <Text style={styles.kilometer}>km/h</Text>
                <Text style={styles.speedcom}>{connected ? speed : '--'}</Text>
              </ProgressCircle>
            </View>
          </View>
          <View style={styles.tempempty}></View>
        </View>
        <View style={styles.lower}>
          <View style={styles.rpmflex}>
            <View style={styles.rpmtemp}>
              <ProgressCircle
                percent={parseInt((rpm/8000)*100)}
                radius={50}
                borderWidth={5}
                color="#1559DC"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={20}>
                <Text style={styles.rpmtext}>RPM</Text>
                <Text style={styles.rpmcom}>{connected ? rpm : '--'}</Text>
              </ProgressCircle>
            </View>
          </View>
          <View style={styles.speedempty}></View>
          <View style={styles.tempflex}>
            <View style={styles.rpmtemp}>
              <ProgressCircle
                percent={coolTemp}
                radius={50}
                borderWidth={5}
                color="#1559DC"
                shadowColor="#00000D"
                bgColor="#051128"
                borderRadius={20}>
                <View style={styles.tempcom}>
                  <MaterialCommunityIcons name="coolant-temperature" size={32} color="white" />
                </View>
              </ProgressCircle>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.fuelview}>
        <View style={styles.fuelflex}><Text style={styles.fueltext}>
          <FontAwesome5 name="gas-pump" size={20} color="white" />
          <Text style={styles.subtext}>  Fuel</Text> (estimated 250km remaining) <Text style={styles.subtext}> {connected ? fuelPercentage : '--'}%</Text></Text></View>
        <View style={styles.fuelmeter}>
          <View style={styles.meterout}>
            <View style={[styles.meterin, { width: `${fuelPercentage}%` }]}></View>
          </View>
        </View>
      </View>
      <View style={styles.odoview}>
        <View style={styles.arrowflex}>
          {isLeftArrowVisible && (
            <TouchableOpacity style={styles.button} onPress={handleLeftArrowClick}>
              <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.odoflex}>
          <View style={styles.odocom}>
            <Text style={styles.odono}>{text1} km</Text>
            <Text style={styles.odotext}>{text2}</Text></View>
        </View>
        <View style={styles.arrowflex}>
          {isRightArrowVisible && (
            <TouchableOpacity style={styles.button} onPress={handleRightArrowClick}>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate('Daily')} style={styles.statview}>
        <View style={styles.statflex}>
          <View style={styles.stattext}>
            <Text style={styles.usage}>Usage stats</Text>
            <Text style={styles.periodic}>Periodic stats, health report</Text>
          </View>
          <View style={styles.statarrow}>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Connect;