import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00000D',
        justifyContent:'center',
        alignItems:'center',
        
     },

     titleview: {
        flex: 0.1,
        width:'100%',
        flexDirection: 'row'
        
     },

     arrow: {
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
     },

     arrowtext: {
        color: 'white',
        fontSize:25

     },

     title: {
        // backgroundColor:'yellow',
        flex: 8,
        justifyContent:'center',
        alignItems:'flex-start'

     },

     titletext:{
        color:'white',
        fontSize:23

     },

     menu:{
        // backgroundColor:'green',
        flex: 1

     },

    welcomeview: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'#00000D',
        flex: 0.9,
        width:'100%'
    },
    one:{
        fontSize:22,
        fontWeight:'500',
        marginLeft:30,
        marginTop:10,
        marginBottom:7,
        color:'white'
    },
    content:{
        fontSize:18,
        fontWeight:'400',
        marginLeft:30,
        marginRight:30,
        color:'white'

    }
})
