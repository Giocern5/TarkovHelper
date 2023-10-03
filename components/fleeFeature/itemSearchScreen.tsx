import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import RootStackParamList from '../../utils/RootStackParamList';
import {useQuery} from '@apollo/client';
import {GET_ITEM} from '../../utils/gql/Query';
import {Styles} from '../../resources/styles';
import SearchBar from './SearchBar';
import strings from '../../resources/strings';

type ItemSearchScreenRouteProp = RouteProp<RootStackParamList, 'ItemSearch'>;

type ItemSearchScreenProps = {
  route: ItemSearchScreenRouteProp;
};

interface Item {
  id: string;
  name: string;
  iconLink: string;
}

const ItemSearchScreen: React.FC<ItemSearchScreenProps> = ({route}) => {
  const [query, setQuery] = useState('');
  const {loading, error, data} = useQuery(GET_ITEM, {
    variables: {
      itemName: query,
    },
  });
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!query) setQuery(strings.defaultSearch);

    if (!loading && data) {
      setItems(data.items);
    }
  }, [loading, data, query]);

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
  };

  // Memoize the itemView function to prevent unnecessary re-renders
  const itemView = useMemo(() => {
    return (item: Item) => (
      <View style={Styles.itemCard}>
        {item.iconLink ? (
          <Image source={{uri: item.iconLink}} style={Styles.itemImage} />
        ) : (
          <Text> Loading...</Text>
        )}
        <Text style={Styles.itemText} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  }, []); // The empty dependency array ensures that the function is memoized and not recreated

  // Memoize the entire FlatList component
  const memoizedFlatList = useMemo(() => {
    return (
      <View style={{marginTop: 4, paddingBottom: 40}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 16}}
          data={items}
          renderItem={({item}) => itemView(item)}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }, [items]); // Re-render the FlatList only when the 'items' state changes

  const displayInfo = () => {
    if (error) {
      return <Text>Error loading data</Text>;
    }

    return loading ? (
      <ActivityIndicator style={Styles.statusBar} color={'red'} />
    ) : (
      memoizedFlatList
    );
  };

  return (
    <View style={Styles.itemContainer}>
      <SearchBar onSearch={handleSearch} />
      {displayInfo()}
    </View>
  );
};

export default ItemSearchScreen;
