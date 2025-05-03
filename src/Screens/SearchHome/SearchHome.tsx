import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {SearchStackParamList} from '../../types/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Contact = {
  id: string;
  name: string;
};

const mockContacts: Contact[] = [
  {id: '1', name: 'Subhash Patel'},
  {id: '2', name: 'Ravi Kumar'},
  {id: '3', name: 'Neha Sharma'},
  {id: '4', name: 'Amit Singh'},
  {id: '5', name: 'Priya Verma'},
  {id: '6', name: 'Karan Joshi'},
];

const SearchHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
  const route = useRoute<RouteProp<SearchStackParamList, 'SearchHome'>>();
  const inputRef = useRef<TextInput>(null);

  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(mockContacts);

  useEffect(() => {
    if (route.params?.searchMode) {
      setSearchMode(true);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [route.params]);

  useEffect(() => {
    const filtered = mockContacts.filter(c =>
      c.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredContacts(filtered);
  }, [searchText]);

  const handleBack = () => {
    setSearchMode(false);
    setSearchText('');
    Keyboard.dismiss();
  };

  const handleContactPress = (contact: Contact) => {
    navigation.navigate('SearchProfile', {username: contact.name});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        {searchMode && (
          <TouchableOpacity onPress={handleBack}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={22}
              style={{marginRight: 8}}
            />
          </TouchableOpacity>
        )}
        <MaterialCommunityIcons
          name="magnify"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          ref={inputRef}
          style={[styles.input, searchMode && {fontSize: 14}]}
          placeholder="Search"
          onFocus={() => setSearchMode(true)}
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

      {searchMode ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => handleContactPress(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.exploreContainer}>
          {/* Dummy Explore Grid */}
          <Text style={{textAlign: 'center'}}>Explore Grid Here</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  exploreContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
