import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({

    main_container: {
        flex: 1,
    },
    map_container: {
        flex: 1,
    },
    bottom_container: {
        height: Dimensions.get('window').height / 3.2,
        width: Dimensions.get('window').width,
        backgroundColor: '#051128',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        marginBottom: -13,
        marginTop: 0
    },
    brand_name: {
        flex: 1.2,
        backgroundColor: '#051128',
        justifyContent: 'space-between',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    kilometers: {
        flex: .5,
        backgroundColor: '#051128',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    know_more: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#051128'
    },
    navbar: {
        flex: 1,
        backgroundColor: '#051128',
        justifyContent: 'center',
        alignItems: 'center'
    },
    brand: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    model: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    know_box: {
        height: Dimensions.get('window').height / 13,
        width: Dimensions.get('window').width / 1.2,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row'
    },
    profile: {
        height: 50,
        width: 50,
        marginTop: 50,
        borderRadius: 50,
        marginLeft: Dimensions.get('window').width / 1.2,
        backgroundColor: '#051128',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1
    }

})