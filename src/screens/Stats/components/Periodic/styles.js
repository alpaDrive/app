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