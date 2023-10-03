import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RootStackParamList from './utils/RootStackParamList';
import client from './utils/apolloClient';
import FleeSearchScreen from './components/fleeFeature/itemSearchScreen';
import StatTrackerScreen from './components/statFeature/StatTrackerScreen';
import HomeScreen from './components/HomeScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ItemSearchScreen from './components/fleeFeature/itemSearchScreen';

// Main App component
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.darker}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ItemSearch" component={ItemSearchScreen} />
            <Stack.Screen name="StatTracker" component={StatTrackerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent('TheTGuide', () => App);
export default App;
