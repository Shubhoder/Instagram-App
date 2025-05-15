import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostStackParamList} from './Post';
import {
  Grayscale,
  Sepia,
  Invert,
  Contrast,
} from 'react-native-color-matrix-image-filters';

type Props = NativeStackScreenProps<PostStackParamList, 'FinalizePost'>;

const FinalizePostScreen = ({route, navigation}: Props) => {
  const {imageUri, filter} = route.params;
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');

  const viewShotRef = useRef<any>(null);

  const renderFilteredImage = () => {
    const image = (
      <Image source={{uri: imageUri}} style={styles.image} resizeMode="cover" />
    );

    switch (filter) {
      case 'grayscale':
        return <Grayscale>{image}</Grayscale>;
      case 'sepia':
        return <Sepia>{image}</Sepia>;
      case 'invert':
        return <Invert>{image}</Invert>;
      case 'contrast':
        return <Contrast amount={2}>{image}</Contrast>;
      default:
        return image;
    }
  };

  const handlePost = async () => {
    try {
      const uri = await viewShotRef.current.capture();

      console.log('Captured Image Path:', uri);

      Alert.alert('Posted!', `Filtered image saved:\n${uri}`);
      navigation.popToTop();
    } catch (error) {
      console.error('Capture failed:', error);
      Alert.alert('Error', 'Could not capture image.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Finalize Your Post</Text>

      <ViewShot
        ref={viewShotRef}
        options={{format: 'jpg', quality: 0.9, result: 'tmpfile'}}>
        <View style={styles.preview}>{renderFilteredImage()}</View>
      </ViewShot>

      <TextInput
        placeholder="Write a caption..."
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Tag people..."
        value={tags}
        onChangeText={setTags}
        style={styles.input}
      />

      <TouchableOpacity onPress={handlePost} style={styles.button}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16, backgroundColor: '#fff'},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  preview: {alignItems: 'center', marginBottom: 20, backgroundColor: '#fff'},
  image: {width: 300, height: 300, borderRadius: 10},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});

export default FinalizePostScreen;
