import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';
import {Styles, textColor} from '../../resources/styles';
import strings from '../../resources/strings';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={Styles.searchBarContainer}>
      <TextInput
        style={Styles.searchBarText}
        placeholder={strings.search}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onSubmitEditing={handleSearch}
        placeholderTextColor={textColor}
      />
    </View>
  );
};
export default SearchBar;
