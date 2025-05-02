import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Post = ({index}: {index: number}) => {
  return (
    <View style={styles.post}>
      <Text style={styles.text}>Post #{index + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    height: 500,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Post;
