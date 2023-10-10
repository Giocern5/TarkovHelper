// ItemContext.tsx

import {View, Button, Text, Image, FlatList} from 'react-native';
import {Styles} from '../../resources/styles';
import React from 'react';
import {Item, SellFor} from '../utils/ItemModel';
import strings from '../../resources/strings';
import {getBestVendor, priceToString} from '../utils/Util';

type ItemContextProps = {
  onClose: () => void;
  selectedItem: Item;
};

const ItemContext: React.FC<ItemContextProps> = ({onClose, selectedItem}) => {
  const numQuests = selectedItem.usedInTasks?.length || null;

  const bestVendorText = () => {
    const vendor = getBestVendor(selectedItem.sellFor);
    return (
      vendor && (
        <Text style={Styles.modalItemText}>
          {strings.bestVendorPrice(vendor.vendor.name)}
        </Text>
      )
    );
  };

  const fleePriceText = () => {
    return (
      selectedItem.lastLowPrice > 0 && (
        <Text style={Styles.modalItemText}>
          {strings.estimatedFleePrice(
            priceToString(selectedItem.lastLowPrice.toString()),
          )}
        </Text>
      )
    );
  };

  const numOfQuestsText = () => {
    return (
      numQuests && (
        <Text style={Styles.modalItemText}>
          {strings.numOfQuests(numQuests)}
        </Text>
      )
    );
  };
  // last known flee price
  // how many quests the item appears in
  // add descriptions

  return (
    <View style={Styles.modalContainer}>
      <Button title="Back" onPress={onClose} />
      <Image
        source={{uri: selectedItem.inspectImageLink}}
        style={Styles.modalImage}
        resizeMode="contain"
      />

      <Text style={Styles.modalItemText} numberOfLines={2}>
        {selectedItem.name}
      </Text>
      {numOfQuestsText()}
      {bestVendorText()}
      {fleePriceText()}
    </View>
  );
};

export default ItemContext;
