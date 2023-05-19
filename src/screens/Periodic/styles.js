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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
  //date picker
  body: {
    height: 100,
    backgroundColor: "#eee",
  },
  datePicker: {
    width: 100,
  },
  dateLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  date_box1: {
    height: 180,
    width: 170,
    borderRadius: 20
  },
  date_box2: {
    height: 180,
    width: 170,
    borderRadius: 20
  },
  periodic_details_name: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  periodic_details_values: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  periodic_text: {
    color: 'white',
    fontSize: 15
  },
  line:{
    height:170,
    width:1,
    backgroundColor:'gray'
  }
});