import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../../Screens/Search/Search';
import Post from '../../Screens/CreatePost/Post';
import Reels from '../../Screens/Reels/Reels';
import Profile from '../../Screens/Profile/Profile';

import HomeStackNavigator from '../HomeStack/HomeStackNavigator';
import {initialRouteName, screenOptions} from './TabNavigatorConfig';

import SearchNavigator from '../SearchStack/SearchStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
