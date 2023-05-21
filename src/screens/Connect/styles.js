import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleview: {
    flex: 0.8,
    // backgroundColor: 'yellow',
    width: '100%',
    flexDirection: 'row'
  },

  titleflex: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
    // backgroundColor: 'green'
  },

  title: {
    width: Dimensions.get('window').width / 2.5,
    resizeMode: 'contain'
  },

  titleempty: {
    flex: 3,
    // backgroundColor: 'blue'
  },

  iconflex: {
    flex: 2,
    //  backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },

  gearview: {
    flex: 1,
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
  },

  endflex: {
    flex: 0.4,
    // backgroundColor: 'white'
  },

  gearflex: {
    flex: 8,
    //  backgroundColor: 'grey',
    borderRadius: 20,
    flexDirection: 'row'
  },

  vehicle: {
    flex: 4,
    // backgroundColor: 'orange',
  },

  model: {
    flex: 5,
    backgroundColor: '#051128',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
  },

  modeltext: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: '600',
    marginLeft: 23
  },

  company: {
    flex: 5,
    backgroundColor: '#051128',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 20,
  },

  companytext: {
    color: '#F9F9F9',
    fontSize: Dimensions.get('window').width / 22,
    fontWeight: '400',
    marginLeft: 25,
    marginTop: -5
  },

  gearempty: {
    flex: 3,
    backgroundColor: '#051128'

  },

  gearpos: {
    flex: 3,
    // backgroundColor: 'pink'
  },

  gearno: {
    flex: 5,
    backgroundColor: '#051128',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 20,

  },

  gearnotext: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 5

  },

  gear: {
    flex: 5,
    backgroundColor: '#051128',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomRightRadius: 20,
  },

  geartext: {
    color: '#D1D1D1',
    fontSize: 20,
    fontWeight: '400',

  },

  speedview: {
    flex: 3,
    //    backgroundColor: 'blue',
    width: '100%',
  },

  upper: {
    flex: 1,
    flexDirection: 'row'
  },

  rpmempty: {
    flex: 0.5,
    // backgroundColor: 'blue'
  },

  speedflex: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  speedometer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }],
  },

  rpmtemp: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }],
  },

  speedcom: {
    fontSize: 60,
    color: 'white',
    fontWeight: '900',
    marginTop: -15,
    transform: [{ rotate: '180deg' }]
  },

  speedtext: {
    color: 'white',
    fontSize: 60,
    fontWeight: '800'
  },

  kilometer: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    transform: [{ rotate: '180deg' }]
  },

  tempempty: {
    flex: 0.5,
    // backgroundColor: 'white'
  },

  lower: {
    flex: 0.5,
    // backgroundColor: 'green',
    flexDirection: 'row'
  },

  rpmflex: {
    flex: 1,
    // backgroundColor:'green',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },

  rpmcom: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginTop: -4,
    transform: [{ rotate: '180deg' }]
  },

  rpmtext: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
    transform: [{ rotate: '180deg' }]
  },

  speedempty: {
    flex: 0.8,
    // backgroundColor:'grey'
  },

  tempflex: {
    flex: 1,
    // backgroundColor:'green',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  tempcom: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }]
  },

  fuelview: {
    flex: 0.7,
    //    backgroundColor: 'pink',
    width: '100%'
  },

  fuelflex: {
    flex: 2,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  fueltext: {
    color: 'white',
    fontWeight: '400'
  },

  subtext: {
    fontWeight: '600',
    fontSize: 18
  },

  fuelmeter: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  meterout: {
    height: 20,
    width: 320,
    backgroundColor: '#060610',
    borderRadius: 20

  },

  meterin: {
    height: 20,
    backgroundColor: '#1559DC',
    borderRadius: 20

  },

  odoview: {
    flex: 1,
    //  backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row'
  },

  arrowflex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green',

  },

  odoflex: {
    flex: 3,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  odocom: {
    height: 60,
    width: 230,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  odono: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },

  odotext: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    marginTop: -5
  },

  statview: {
    flex: 1,
    //  backgroundColor: 'orange',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  statflex: {

    height: 70,
    width: 335,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row'

  },

  stattext: {
    flex: 8,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20

  },

  usage: {
    color: 'black',
    fontSize: 17,
    marginLeft: 20,
    fontWeight: '500'
  },

  periodic: {
    color: '#4D4747',
    fontSize: 14,
    marginLeft: 20,
    fontWeight: '500'
  },

  statarrow: {
    flex: 2,
    // backgroundColor: 'yellow',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
