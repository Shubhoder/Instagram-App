import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchHome from '../../Screens/SearchHome/SearchHome';

import SearchPofile from '../../Screens/SearchPofile/SearchPofile';
import {SearchStackParamList} from '../../types/Navigation';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchHome" component={SearchHome} />
      <Stack.Screen name="SearchProfile" component={SearchPofile} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
const styles = StyleSheet.create({});
