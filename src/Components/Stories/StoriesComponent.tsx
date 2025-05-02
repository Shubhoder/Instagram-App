import React from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Stories = () => {
  const dummyStories = Array.from({length: 10}, (_, i) => ({
    id: i.toString(),
    name: `User${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {dummyStories.map(story => (
          <View key={story.id} style={styles.story}>
            <View style={styles.circle} />
            <Text style={styles.text}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100, // Ensures visibility
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
    width: 70, // Ensures spacing
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Stories;
