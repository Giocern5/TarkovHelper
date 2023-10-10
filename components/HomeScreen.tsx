import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from './utils/RootStackParamList';
import {Styles} from '../resources/styles';
import strings from '../resources/strings';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={Styles.homeScreenContiner}>
      <View style={{marginVertical: 10}}>
        <Button
          title={strings.itemSearch}
          onPress={() => navigation.navigate('ItemSearch', {itemId: 123})}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          title="Go to Stat Tracker"
          onPress={() => navigation.navigate('StatTracker')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
