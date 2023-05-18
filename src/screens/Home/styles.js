import { StyleSheet } from "react-native"

export default StyleSheet.create({

    main_container: {
        flex: 1,
    },
    map_container: {
        flex: 1,
        
    },
    bottom_container: {
        height:250,
        width:400,
        justifyContent:'space-around',
        backgroundColor:'#051128',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    container:{
        flex:1
    },
    map:{
        flex:1,
        marginBottom:-13,
        marginTop:0
    },
    brand_name:{
        flex:1.2,
        backgroundColor:'#051128',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    kilometers:{
        flex:.5,
        backgroundColor:'#051128',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
    know_more:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    navbar:{
        flex:1,
        backgroundColor:'#051128',
        justifyContent:'center',
        alignItems:'center'
    },
    brand:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    model:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    know_box:{
        height:60,
        width:350,
        borderRadius:15,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#ffff',
        flexDirection:'row'
    },
    navbar_box:{
        height:60,
        width:350,
        borderRadius:15,
        flexDirection:'row' 
    },
    
})