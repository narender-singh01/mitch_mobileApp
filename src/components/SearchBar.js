import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Images} from '../constants/imagePaths';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fonts';

const SearchBar = ({customStyle}) => {
  return (
    <View style={[styles.searchContainer,customStyle={customStyle}]}>
      <View style={styles.searchIconContainer}>
        <Image source={Images.ic_search} style={styles.searchIcon} />
      </View>
      <TextInput
        placeholder="Search by restaurant or food"
        style={styles.searchInput}
        placeholderTextColor={colors.gray}
      />
      <View style={styles.searchIconContainer}>
        <TouchableOpacity>
          <Image source={Images.ic_mic} style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: colors.searchBar,
    marginTop:20
  },
  searchIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {height: 32, width: 32, resizeMode: 'contain'},
  searchInput: {flex: 7, height: 45, fontSize: fontSize.l,color:colors.gray},
});
