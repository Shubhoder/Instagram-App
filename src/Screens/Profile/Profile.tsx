import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SearchStackParamList} from '../../types/Navigation'; // Adjust the path as per your project

const Contacts = [
  {id: '1', name: 'Subhash'},
  {id: '2', name: 'Sumit'},
  {id: '3', name: 'Golu'},
  {id: '4', name: 'Amit'},
  {id: '5', name: 'Deepak'},
];

const SearchContact = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
  const [contactText, setContactText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(Contacts);
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    const filtered = Contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactText.toLowerCase()),
    );
    setFilteredContacts(filtered);
  }, [contactText]);

  const handleContactProfile = (contact: {id: string; name: string}) => {
    navigation.navigate('SearchProfile', {username: contact.name});
  };

  const handleBack = () => {
    setSearchMode(false);
    setContactText('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.searchContainer}>
        {searchMode && (
          <TouchableOpacity onPress={handleBack}>
            <MaterialCommunityIcons name="arrow-left" size={22} />
          </TouchableOpacity>
        )}
        <TextInput
          onFocus={() => setSearchMode(true)}
          value={contactText}
          onChangeText={setContactText}
          placeholder="Search"
          style={styles.input}
        />
      </View>
      {searchMode ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => handleContactProfile(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>explore Grid</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchContact;

const styles = StyleSheet.create({
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
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
