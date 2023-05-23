import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#00000D'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    profile: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: '#051128',
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        fontSize: 30,
        color: 'white'
    },
    details: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    buttons: {
        flex: 1.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    faq: {
        height: 80,
        width: 350,
        borderRadius: 10,
        backgroundColor: '#051128',
        flexDirection: 'row'
    },
    faq1: {
        flex: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    faq2: {
        flex: .5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    signout: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalblank: {
        flex: 3
    },
    modalContent: {
        backgroundColor: '#07142F',
        width: '100%',
        flex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    model: {
        color: 'white',
        marginTop: 10,
        fontSize: Dimensions.get('window').width / 20
    },
    make: {
        color: 'white',
        fontSize: Dimensions.get('window').width / 25
    },
    helpertext: {
        color: 'white',
        fontSize: Dimensions.get('window').width / 28,
        marginBottom: 20
    }
})