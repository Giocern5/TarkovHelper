import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import RootStackParamList from '../../utils/RootStackParamList';

type StatTrackerScreenRouteProp = RouteProp<RootStackParamList, 'StatTracker'>;

type StatTrackerScreenProps = {
  route: StatTrackerScreenRouteProp;
};

const StatTrackerScreen: React.FC<StatTrackerScreenProps> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>StatTracker Screen</Text>
    </View>
  );
};

export default StatTrackerScreen;
