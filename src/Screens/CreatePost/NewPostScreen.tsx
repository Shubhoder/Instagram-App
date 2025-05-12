import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ImageGrid from '../../Components/ImageGrid/ImageGrid';
import ImagePreview from '../../Components/ImagePreview/ImagePreview';
import useGallery from '../../Hooks/useGallery';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostStackParamList} from './Post';

type Props = NativeStackScreenProps<PostStackParamList, 'NewPost'>;

const NewPostScreen = ({navigation}: Props) => {
  const {photos, pickImages} = useGallery();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Post</Text>
        <TouchableOpacity style={styles.selectBtn} onPress={pickImages}>
          <Text style={styles.selectBtnText}>Select Images</Text>
        </TouchableOpacity>
      </View>

      {selectedImage && <ImagePreview uri={selectedImage} />}
      <ImageGrid photos={photos} onSelectImage={setSelectedImage} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditPost', {imageUri: selectedImage!})
        }
        disabled={!selectedImage}
        style={[
          styles.button,
          {backgroundColor: selectedImage ? '#007AFF' : '#aaa'},
        ]}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#fff'},
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  selectBtn: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  selectBtnText: {color: '#fff', fontWeight: 'bold'},
  button: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});

export default NewPostScreen;
