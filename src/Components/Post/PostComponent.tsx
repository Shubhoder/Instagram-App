import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const posts = [
  {
    id: '1',
    username: 'subhash_patel',
    caption: 'Yeh meri pehli post hai!',
    image: require('../../Asset/images/StoryImages/01.jpg'),
  },
  {
    id: '2',
    username: 'ravi_kumar',
    caption: 'Chai peene ka mood hai ☕️',
    image: require('../../Asset/images/StoryImages/02.jpg'),
  },
  {
    id: '3',
    username: 'neha_sharma',
    caption: 'Nature walk 🌿',
    image: require('../../Asset/images/StoryImages/03.jpg'),
  },
  {
    id: '4',
    username: 'amit_singh',
    caption: 'Gym time 💪',
    image: require('../../Asset/images/StoryImages/04.jpg'),
  },
  {
    id: '5',
    username: 'priya_verma',
    caption: 'New outfit, new vibes ✨',
    image: require('../../Asset/images/StoryImages/05.jpg'),
  },
  {
    id: '6',
    username: 'karan_joshi',
    caption: 'Weekend road trip 🚗',
    image: require('../../Asset/images/StoryImages/06.jpg'),
  },
  {
    id: '7',
    username: 'pooja_rai',
    caption: 'Homemade food is the best 🍲',
    image: require('../../Asset/images/StoryImages/07.png'),
  },
  {
    id: '8',
    username: 'suresh_rao',
    caption: 'Throwback to Goa 🏖️',
    image: require('../../Asset/images/StoryImages/08.jpg'),
  },
  {
    id: '9',
    username: 'meena_jain',
    caption: 'Selfie game strong 📸',
    image: require('../../Asset/images/StoryImages/09.jpg'),
  },
  {
    id: '10',
    username: 'anil_mehta',
    caption: 'Evening vibes 🌇',
    image: require('../../Asset/images/StoryImages/10.jpg'),
  },
];

const PostsWithImages = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text style={styles.username}>{item.username}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    borderRadius: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 550,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 5,
  },
});

export default PostsWithImages;
