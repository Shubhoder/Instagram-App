import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../Screens/Home/Home';
import Search from '../../Screens/Search/Search';
import Post from '../../Screens/CreatePost/Post';
import Reels from '../../Screens/Reels/Reels';
import Profile from '../../Screens/Profile/Profile';

import {getTabIcon} from '../../Constants/Tabicons';
import HomeStackNavigator from '../HomeStack/HomeStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({focused, color, size}) =>
          getTabIcon({route: route.name, focused, color, size}),
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
          height: 60,
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
