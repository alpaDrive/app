import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#00000D',
    },

    header: {
        flex: 2,
        flexDirection: 'row'
    },
    video: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 8, 
        justifyContent: 'center'
    },
    date: {
        color: 'white'
    },
    time: {
        color: 'grey'
    }
})