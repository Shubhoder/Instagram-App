import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

interface Props {
  uri: string;
}

const ImagePreview: React.FC<Props> = ({uri}) => (
  <View style={styles.container}>
    <Text style={styles.label}>Selected Image:</Text>
    <Image source={{uri}} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginVertical: 10},
  label: {marginBottom: 6, fontSize: 16},
  image: {width: 200, height: 200, borderRadius: 8},
});

export default ImagePreview;
