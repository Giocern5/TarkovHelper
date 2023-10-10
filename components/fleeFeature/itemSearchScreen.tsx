import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import RootStackParamList from '../utils/RootStackParamList';
import {useQuery} from '@apollo/client';
import {GET_ITEM} from '../utils/gql/Query';
import {Styles} from '../../resources/styles';
import SearchBar from './SearchBar';
import strings from '../../resources/strings';
import ItemContext from './ItemContext';
import {Item} from '../utils/ItemModel';

type ItemSearchScreenRouteProp = RouteProp<RootStackParamList, 'ItemSearch'>;

type ItemSearchScreenProps = {
  route: ItemSearchScreenRouteProp;
};

const ItemSearchScreen: React.FC<ItemSearchScreenProps> = ({route}) => {
  const [query, setQuery] = useState('');
  const {loading, error, data} = useQuery(GET_ITEM, {
    variables: {
      itemName: query,
    },
  });
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  useEffect(() => {
    if (!query) setQuery(strings.defaultSearch);

    if (data) {
      // go over again
      // old items were appearing before being set,this prevents that bug
      setItems([]);
      setItems(data.items);
    }
  }, [data, query]);

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
  };

  const showContextMenu = (selectedItem: Item) => {
    setSelectedItem(selectedItem);
  };

  const closeContextMenu = () => {
    setSelectedItem(null);
  };

  const loadingSpinner = () => {
    return <ActivityIndicator style={Styles.statusBar} />;
  };

  const itemView = (item: Item) => {
    return (
      <View style={Styles.itemCard} onTouchEnd={() => showContextMenu(item)}>
        <Image
          source={{
            uri: item.inspectImageLink,
          }}
          style={Styles.itemImage}
          resizeMode="contain"
        />
        <Text style={Styles.itemText} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  };

  const itemCards = () => {
    return (
      <View style={{marginTop: 4, paddingBottom: 40}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 16}}
          data={items}
          renderItem={({item}) => itemView(item)}
          keyExtractor={item => item.id}
          numColumns={2}
          // check agin later
          fadingEdgeLength={100}
        />
      </View>
    );
  };

  const displayCards = () => {
    ///To do: Find a better way for error
    if (error) {
      console.log(error.stack);
      return (
        <Text
          style={{color: 'blue', alignItems: 'center', alignSelf: 'center'}}>
          {error.stack}
        </Text>
      );
    }
    //find a more efficient solution
    return loading ? loadingSpinner() : itemCards();
  };

  return (
    <View>
      <View style={Styles.itemContainer}>
        <SearchBar onSearch={handleSearch} />
        {displayCards()}
      </View>
      {selectedItem && (
        <Modal visible={true} transparent={true} animationType="slide">
          <ItemContext selectedItem={selectedItem} onClose={closeContextMenu} />
        </Modal>
      )}
    </View>
  );
};

export default ItemSearchScreen;
