import { StyleSheet } from "react-native"


export default StyleSheet.create({

  container: {
    flex: 1,

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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
  //date box
  date_box: {
    height: 200,
    width: 360,
    backgroundColor: '#07142F',
    borderRadius: 20,
    flexDirection: 'row'
  },
  list_style: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  left_right_space: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 

});