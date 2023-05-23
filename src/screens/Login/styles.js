import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000D',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },

    title: {
        width: Dimensions.get('window').width / 1.8,
        resizeMode: 'contain'
    },

    welcomeview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1.5,
    },

    welcome: {
        color: '#1559DC',
        fontSize: 30,
        fontWeight: '400',
        marginVertical: -3
    },

    details: {
        color: 'white',
        fontSize: 24,
        fontWeight: '400',

    },
    inputview: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4
    },

    textinput: {
        height: 60,
        width: 300,
        borderWidth: 2,
        backgroundColor: '#D9D9D9',
        borderColor: '#1559DC',
        marginHorizontal: 40,
        marginVertical: 10,
        borderRadius: 20,
        paddingLeft: 20

    },
    button: {
        backgroundColor: '#1559DC',
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 32,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    buttontext: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
    },

    subtextview: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    subtexted: {
        color: 'white',
        fontWeight: '400'
    },

    sign: {
        color: '#1559DC',
        fontWeight: '400'
    },

    downtextview: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    downtexted: {
        fontSize: 10,
        color: 'white',

    },
})