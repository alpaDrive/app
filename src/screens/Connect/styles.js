import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00000D',
        justifyContent:'center',
        alignItems:'center',
        
     },

     titleview: {
         flex: 0.8,
         // backgroundColor: 'yellow',
         width:'100%',
         flexDirection: 'row'
     },

     titleflex: {
         justifyContent:'center',
         alignItems:'center',
         flex: 5,
         // backgroundColor: 'green'
     },

     title: {
         color: 'white',
         fontSize:30,
         fontWeight:'300'
        
         

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
         flex:0.4,
         // backgroundColor: 'white'
     },

     gearflex: {
         flex: 8,
         backgroundColor: 'grey',
         borderRadius:20,
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
         fontSize: 30,
         fontWeight: '600',
         marginLeft: 23
     },

     company: {
         flex: 5,
         backgroundColor:'#051128',
         justifyContent:'flex-start',
         alignItems: 'flex-start',
         borderBottomLeftRadius: 20,
     },

     companytext: {
         color: '#F9F9F9',
         fontSize: 20,
         fontWeight: '400',
         marginLeft: 25,
         marginTop:-5
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
         justifyContent:'flex-end',
         alignItems: 'center',
         borderTopRightRadius: 20,

     },

     gearnotext:{
      color: 'white',
      fontSize: 40,
      fontWeight: '700',
      marginTop:5

     },

     gear: {
         flex: 5,
         backgroundColor: '#051128',
         justifyContent:'flex-start',
         alignItems:'center',
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
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },


      speedcom: {
        height:180,
        width: 180,
        borderRadius: 90,
        backgroundColor: '#051128',
        borderColor: 'white',
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center'

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
        marginTop:-15
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
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#051128',
        borderColor: '#1559DC',
        borderWidth: 4,
        justifyContent:'center',
        alignItems:'center'
      },

      rpm: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
      },

      rpmtext: {
        color: 'white',
        fontSize: 13,
        fontWeight: '400'
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
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#051128',
        borderColor: '#1559DC',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontWeight:'400'
      },

      subtext: {
        fontWeight:'600',
        fontSize: 18
      },

      fuelmeter: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent:'center',
        alignItems:'center'
      },

      meterout: {
        height:20,
        width:320,
        backgroundColor:'#060610',
        borderRadius:20

      },

      meterin: {
        height:20,
        width:200,
        backgroundColor:'#1559DC',
        borderRadius:20

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
            height:60,
            width: 230,
            backgroundColor: '#1559DC',
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
            color:'white',
            fontSize: 15,
            fontWeight: '400',
            marginTop:-5
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
            borderBottomLeftRadius:20,
            borderTopLeftRadius:20

        },

        usage: {
            color: 'black',
            fontSize: 17,
            marginLeft:20,
            fontWeight: '500'
        },

        periodic: {
            color: '#4D4747',
            fontSize: 14,
            marginLeft:20,
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
