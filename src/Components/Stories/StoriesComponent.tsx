import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';

const stories = [
  {
    id: '1',
    name: 'Subhash',
    image: require('../../Asset/images/StoryImages/01.jpg'),
  },
  {
    id: '2',
    name: 'Ravi',
    image: require('../../Asset/images/StoryImages/02.jpg'),
  },
  {
    id: '3',
    name: 'Suresh',
    image: require('../../Asset/images/StoryImages/03.jpg'),
  },
  {
    id: '4',
    name: 'Anita',
    image: require('../../Asset/images/StoryImages/04.jpg'),
  },
  {
    id: '5',
    name: 'Amit',
    image: require('../../Asset/images/StoryImages/05.jpg'),
  },
  {
    id: '6',
    name: 'Priya',
    image: require('../../Asset/images/StoryImages/06.jpg'),
  },
  {
    id: '7',
    name: 'Karan',
    image: require('../../Asset/images/StoryImages/07.png'),
  },
  {
    id: '8',
    name: 'Pooja',
    image: require('../../Asset/images/StoryImages/08.jpg'),
  },
  {
    id: '9',
    name: 'Neha',
    image: require('../../Asset/images/StoryImages/09.jpg'),
  },
  {
    id: '10',
    name: 'Meena',
    image: require('../../Asset/images/StoryImages/10.jpg'),
  },
];

const StoriesWithImages = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {stories.map(story => (
          <View key={story.id} style={styles.story}>
            <Image source={story.image} style={styles.circle} />
            <Text style={styles.text}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default StoriesWithImages;
