import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SearchStackParamList} from '../../types/Navigation';

type ProfileRouteProp = RouteProp<SearchStackParamList, 'SearchProfile'>;

const SearchProfile = () => {
  const route = useRoute<ProfileRouteProp>();
  const {username} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.username}>Welcome to {username}'s profile</Text>
    </SafeAreaView>
  );
};

export default SearchProfile;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  username: {fontSize: 20, fontWeight: 'bold'},
});
