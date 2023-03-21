import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000D',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleview: {
        alignItems: 'center',
        flex: 0.2,
    },

    title: {
        width: Dimensions.get('window').width / 1.8,
        resizeMode: 'contain'
    },

    // title: {
    //     color: 'white',
    //     fontSize: 33,
    //     fontWeight: '300',
    // },

    welcomeview: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.12,
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
        fontWeight: '400'

    },
    inputview: {
        alignItems: 'center',
        flex: 0.50,
    },

    textinput: {
        height: 60,
        width: 300,
        borderWidth: 2,
        backgroundColor: '#D9D9D9',
        borderColor: '#1559DC',
        marginHorizontal: 40,
        marginVertical: 5,
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
        marginBottom: 10,
        marginVertical: 25,
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
        flex: 0.12,
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
        flex: 0.06,
    },
    downtexted: {
        fontSize: 10,
        color: 'white',

    },
})