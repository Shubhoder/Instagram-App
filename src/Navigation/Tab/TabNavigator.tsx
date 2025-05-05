import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import Search from '../../Screens/Search/Search';
import Post from '../../Screens/CreatePost/Post';
import Reels from '../../Screens/Reels/Reels';
import Profile from '../../Screens/Profile/Profile';

import HomeStackNavigator from '../HomeStack/HomeStackNavigator';
import {initialRouteName, screenOptions} from './TabNavigatorConfig';
import SearchNavigator from '../SearchStack/SearchStackNavigator';
import {TabParamList} from '../../Types/Navigation'; // Adjust path

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />

      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              delayLongPress={1000}
              onPress={() => navigation.navigate('Search', {})}
              onLongPress={() =>
                navigation.navigate('Search', {
                  screen: 'SearchHome',
                  params: {searchMode: true},
                })
              }
            />
          ),
        }}
      />

      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
