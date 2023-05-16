import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from'./styles';

const Connect = () => {
   
    return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleview}>
        <View style={styles.titleflex}><Text style={styles.title}>ALPADRIVE</Text></View>
        <View style={styles.titleempty}></View>
        <View style={styles.iconflex}>
        <Feather name="user" size={29} color="white" />
        </View>
      </View>

      <View style={styles.gearview}>
        <View style={styles.endflex}></View>
        <View style={styles.gearflex}>
          <View style={styles.vehicle}>
            <View style={styles.model}><Text style={styles.modeltext}>Octavia</Text></View>
            <View style={styles.company}><Text style={styles.companytext}>Skoda</Text></View>
          </View>
          <View style={styles.gearempty}></View>
          <View style={styles.gearpos}>
            <View style={styles.gearno}><Text style={styles.gearnotext}>3</Text></View>
            <View style={styles.gear}><Text style={styles.geartext}>Gear</Text></View>
          </View>
        </View>
        <View style={styles.endflex}></View>
      </View>

      <View style={styles.speedview}>

        <View style={styles.upper}>
          <View style={styles.rpmempty}></View>
          <View style={styles.speedflex}>
            <View style={styles.speedcom}>
              <Text style={styles.speedtext}>45</Text>
              <Text style={styles.kilometer}>km/h</Text>
            </View>
          </View>
          <View style={styles.tempempty}></View>
          </View>

        <View style={styles.lower}>
          <View style={styles.rpmflex}>
            <View style={styles.rpmcom}>
              <Text style={styles.rpm}>3000</Text>
              <Text style={styles.rpmtext}>RPM</Text>
            </View>
          </View>
          <View style={styles.speedempty}></View>
          <View style={styles.tempflex}>
            <View style={styles.tempcom}>
            <MaterialCommunityIcons name="coolant-temperature" size={32} color="white" />
            </View>
          </View>
          </View>  
      </View>

      <View style={styles.fuelview}>
        <View style={styles.fuelflex}><Text style={styles.fueltext}>
        <FontAwesome5 name="gas-pump" size={20} color="white" />
          <Text style={styles.subtext}>  Fuel</Text> (estimated 250km remaining)<Text style={styles.subtext}> 60%</Text></Text></View>
        <View style={styles.fuelmeter}>
          <View style={styles.meterout}>
            <View style={styles.meterin}></View>
          </View>
        </View>
      </View>

      <View style={styles.odoview}>
        <View style={styles.arrowflex}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </View>
        <View style={styles.odoflex}>
          <View style={styles.odocom}>
            <Text style={styles.odono}>49,950 km</Text>
            <Text style={styles.odotext}>Total</Text></View>
        </View>
        <View style={styles.arrowflex}>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </View>
      </View>
      <View style={styles.statview}>
        <View style={styles.statflex}>
          <View style={styles.stattext}>
            <Text style={styles.usage}>Usage stats</Text>
            <Text style={styles.periodic}>Periodic stats, health report</Text>
          </View>
          <View style={styles.statarrow}>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
          </View>
        </View>
      </View>

           
    </SafeAreaView>
  );
};

export default Connect;