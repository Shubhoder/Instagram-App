import React from 'react';
import {FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  photos: string[];
  onSelectImage: (uri: string) => void;
}

const ImageGrid: React.FC<Props> = ({photos, onSelectImage}) => (
  <FlatList
    data={photos}
    numColumns={3}
    keyExtractor={uri => uri}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => onSelectImage(item)}>
        <Image source={{uri: item}} style={styles.image} />
      </TouchableOpacity>
    )}
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {marginVertical: 10},
  image: {
    width: 120,
    height: 120,
    margin: 2,
    borderRadius: 4,
  },
});

export default ImageGrid;
