import { StyleSheet, Dimensions } from "react-native"


export default StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00000D',
    },
    center: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 100,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#081B42',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },




})