import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const deviceWidth = Dimensions.get('window').width;
const dWidth = deviceWidth * 0.45; // 45% of the screen width
const dHeight = dWidth * (16 / 9); // Maintain a 4:3 aspect ratio
export const textColor = '#e5e2c2';
const basicStyle = StyleSheet.create({
  text: {
    color: textColor, // Set the text color
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
    //backgroundColor: 'blue',
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
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
