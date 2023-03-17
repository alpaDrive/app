import { StyleSheet } from "react-native"


export default StyleSheet.create({
    rootp:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#00000D',
    },
    headerp:{
        flex:1,
        flexDirection:'row'
    },
    logop:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    userp:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    camera:{
        flex:6,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:'10',
        borderTopRightRadius:'10'
    },
    bottom1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        height:100,
        width:400,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#051128',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }


})