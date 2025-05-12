import {useState} from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
  types as DocumentPickerTypes,
} from 'react-native-document-picker';

const useGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const pickImages = async () => {
    try {
      const results: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPickerTypes.images],
        allowMultiSelection: true,
      });

      const uris = results.map(res => res.uri);
      setPhotos(uris);
    } catch (err: any) {
      if (!DocumentPicker.isCancel(err)) {
        console.warn('Error picking images:', err);
      }
    }
  };

  return {photos, pickImages};
};

export default useGallery;
