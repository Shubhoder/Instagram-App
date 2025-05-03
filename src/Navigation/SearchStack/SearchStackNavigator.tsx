import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchHome from '../../Screens/SearchHome/SearchHome';
import SearchFocus from '../../Screens/SearchFocus/SearchFocus';
import SearchPofile from '../../Screens/SearchPofile/SearchPofile';
import {SearchStackParamList} from '../../types/Navigation';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="SearchHome" component={SearchHome} />
      <Stack.Screen name="SearchFocus" component={SearchFocus} />
      <Stack.Screen name="SearchProfile" component={SearchPofile} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
const styles = StyleSheet.create({});
