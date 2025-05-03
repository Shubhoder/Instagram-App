import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {SearchStackParamList} from '../../types/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SearchFocus')}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
});
