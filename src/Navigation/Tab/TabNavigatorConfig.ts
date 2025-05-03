import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {getTabIcon} from '../../Constants/Tabicons';

const screenOptions = ({route}: any): BottomTabNavigationOptions => ({
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
});

const initialRouteName = 'Home';

export {screenOptions, initialRouteName};
