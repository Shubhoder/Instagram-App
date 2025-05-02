import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home/Home';
import Likes from '../../Screens/Likes/Likes';
import Messages from '../../Screens/Messages/Messages';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
