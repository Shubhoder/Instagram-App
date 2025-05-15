import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Grayscale,
  Sepia,
  Invert,
  Contrast,
} from 'react-native-color-matrix-image-filters';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostStackParamList} from './Post';

const FILTERS = ['none', 'grayscale', 'sepia', 'invert', 'contrast'] as const;

type Props = NativeStackScreenProps<PostStackParamList, 'EditPost'>;

const EditPostScreen = ({route, navigation}: Props) => {
  const {imageUri} = route.params;
  const [croppedUri, setCroppedUri] = useState(imageUri);
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof FILTERS)[number]>('none');

  const handleCrop = async () => {
    try {
      const result = await ImagePicker.openCropper({
        path: croppedUri,
        width: 1080,
        height: 1080,
        cropping: true,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
      });
      setCroppedUri(result.path);
    } catch (error) {
      console.log('Crop cancelled:', error);
    }
  };

  const renderImage = () => {
    const image = (
      <Image
        source={{uri: croppedUri}}
        style={styles.image}
        resizeMode="cover"
      />
    );

    switch (selectedFilter) {
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

  const handleNext = () => {
    navigation.navigate('FinalizePost', {
      imageUri: croppedUri,
      filter: selectedFilter,
    });
  };

  const handlePost = () => {
    Alert.alert('Posted!', 'Image has been uploaded.');
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Post</Text>
      <View style={styles.preview}>{renderImage()}</View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}>
        {FILTERS.map(filter => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelectedFilter(filter)}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selected,
            ]}>
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleCrop} style={styles.actionBtn}>
          <Text style={styles.buttonText}>Crop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.actionBtn}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#fff'},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  preview: {alignItems: 'center', marginBottom: 20},
  image: {width: 300, height: 300, borderRadius: 8},
  filters: {flexGrow: 0},
  filterButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#007AFF',
  },
  filterText: {color: '#000'},
  bottom: {flexDirection: 'row', justifyContent: 'space-around', marginTop: 20},
  actionBtn: {backgroundColor: '#007AFF', padding: 12, borderRadius: 8},
  buttonText: {color: '#fff', fontWeight: 'bold'},
});

export default EditPostScreen;
