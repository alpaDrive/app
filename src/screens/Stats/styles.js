import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
})