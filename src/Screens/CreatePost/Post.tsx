import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewPostScreen from './NewPostScreen';
import EditPostScreen from './EditPostScreen';
import FinalizePostScreen from './FinalizePostScreen';

export type PostStackParamList = {
  NewPost: undefined;
  EditPost: {imageUri: string};
  FinalizePost: {imageUri: string; filter: string};
};

const Stack = createNativeStackNavigator<PostStackParamList>();

const Post = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewPost" component={NewPostScreen} />
      <Stack.Screen name="EditPost" component={EditPostScreen} />
      <Stack.Screen name="FinalizePost" component={FinalizePostScreen} />
    </Stack.Navigator>
  );
};

export default Post;
