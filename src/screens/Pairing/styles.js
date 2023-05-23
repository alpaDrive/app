import { StyleSheet,Dimensions } from "react-native"


export default StyleSheet.create({
    rootp: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00000D',
    },
    headerp: {
        flex: 1,
        flexDirection: 'row'
    },
    logop: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userp: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    camera: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottom1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        height: 130,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#07142F',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    headerp: {
        height: 130,
        width: Dimensions.get('window').width,
        backgroundColor: '#07142F',
    },
    modelContainer_pairing: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent_Pairing: {
        backgroundColor: '#07142F',
        width: '100%',
        height: 300,
        borderRadius:25,
        

    },
    input :{
        height:50,
        width:300,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        padding:13
        
    }




})