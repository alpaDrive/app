import { StyleSheet } from "react-native"

export default StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slection_button: {
        height: 40,
        width: 130,
        borderRadius: 15,
        backgroundColor: '#07142F',
        flexDirection: 'row'
    },
    //pop up css..
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#07142F',
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        

});