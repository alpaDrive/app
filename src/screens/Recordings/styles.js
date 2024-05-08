import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#00000D'
    },
    header: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 20
    },
    name: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    body: {
        flex: 8,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    list: {
        alignItems: 'center'
    },
    card: {
        width: Dimensions.get('window').width-40,
        height: Dimensions.get('window').height/3.5,
        backgroundColor: '#051128',
        borderRadius: 20,
        marginTop: 20
    },
    top: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details: {
        flex: 1,
        flexDirection: 'row',
    },
    thumbnail: {
        width: Dimensions.get('window').width-80,
        height: Dimensions.get('window').height/6,
        borderRadius: 10
    },
    meta: {
        flex: 6,
    },
    date: {
        color: 'white',
        fontSize: 15,
        marginLeft: Dimensions.get('window').width/15
    },
    time: {
        color: 'grey',
        marginLeft: Dimensions.get('window').width/15
    },
    actions: {
        flex: 3,
        flexDirection: 'row'
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    play: {
        position: 'absolute',
        zIndex: 2,
        top: '40%',
        left: '48%',
        transform: [{ translateX: -12 }, { translateY: -12 }], // half the size of your icon
    }
})