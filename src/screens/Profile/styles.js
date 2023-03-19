import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:'#00000D'
    
    },
    header:{
        flex:1,
        flexDirection:'row',
    },
    profile:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        height:120,
        width:120,
        borderRadius:60,
        backgroundColor:'#051128',
        justifyContent:'center',
        alignItems:'center'
    },
    user:{
        fontSize:30
    },
    details:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    buttons:{
        flex:1.5,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    faq:{
        height:80,
        width:350,
        borderRadius:10,
        backgroundColor:'#051128',
        flexDirection:'row'
    },
    faq1:{
        flex:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    faq2:{
        flex:.5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    signout:{
        flex:.5,
        justifyContent:'center',
        alignItems:'center'
    }
})