import { StyleSheet } from "react-native"


export default StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#00000D',
    },
    header:{
        flex:1,
        flexDirection:'row'
    },
    logo:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    user:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    center:{
        flex:6,
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:100,
        width:400,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#051128',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }


})