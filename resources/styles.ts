import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const deviceWidth = Dimensions.get('window').width;
const dWidth = deviceWidth * 0.45; // 45% of the screen width
const primaryColor = '#e5e2c2';
const basicStyle = StyleSheet.create({
  text: {
    color: primaryColor, // Set the text color
    fontSize: 15, // Adjust the font size
    fontWeight: 'bold', // Set font weight to bold if desired
  },
});

export const Styles = StyleSheet.create({
  text: {
    ...basicStyle.text,
  },
  searchBarText: {
    height: 40,
    width: '100%',
    margin: 5,
    ...basicStyle.text,
  },
  searchBarButton: {
    alignSelf: 'flex-end',
  },

  searchBarContainer: {
    alignItems: 'center',
    backgroundColor: Colors.dark,
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
  },
  itemCard: {
    margin: 10,
    marginLeft: 10,
    marginStart: 10,
    //marginEnd: 1,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    width: dWidth,
    height: dWidth,
    overflow: 'hidden',
  },

  itemImage: {
    width: '85%',
    height: '85%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  itemText: {
    ...basicStyle.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
  },

  itemContainer: {
    backgroundColor: Colors.darker,
    height: '100%',
  },

  homeScreenContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.darker,
  },
  statusBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: primaryColor,
  },

  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100%',
    width: '100%',
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
  },
  modalImage: {
    alignSelf: 'center',
    height: '35%',
    width: '100%',
    marginBottom: 5,
    marginTop: 5,
  },
  modalItemText: {
    ...basicStyle.text,
    alignContent: 'flex-start',
  },
});
