// ItemContext.tsx

import {View, Button, Text, Image, FlatList} from 'react-native';
import {Styles} from '../resources/styles';
import React from 'react';
import {Item, SellFor} from '../utils/Models';
import strings from '../resources/strings';

type ItemContextProps = {
  onClose: () => void;
  selectedItem: Item;
};

const ItemContext: React.FC<ItemContextProps> = ({onClose, selectedItem}) => {
  const numQuests = selectedItem.usedInTasks?.length || null;

  const itemPrices = (prices: SellFor) => {
    return (
      <Text style={Styles.modalItemText}>
        {prices.source + ' ' + prices.price + ' ' + prices.currency}
      </Text>
    );
  };

  return (
    <View style={Styles.modalContainer}>
      <Button title="Back" onPress={onClose} />
      <Image
        source={{uri: selectedItem.inspectImageLink}}
        style={Styles.modalImage}
        resizeMode="contain"
      />

      <Text style={Styles.itemText} numberOfLines={2}>
        {selectedItem.name}
      </Text>
      {numQuests && (
        <Text style={Styles.modalItemText}>
          {strings.numOfQuests(numQuests)}
        </Text>
      )}

      <FlatList
        contentContainerStyle={{
          flexDirection: 'column',
        }}
        data={selectedItem.sellFor}
        renderItem={({item}) => itemPrices(item)}
      />
    </View>
  );
};

export default ItemContext;
