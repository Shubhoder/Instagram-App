import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStackParamList} from '../../types/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Stories from '../../Components/Stories/StoriesComponent';
import PostsWithImages from '../../Components/Post/PostComponent';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Likes')}
            style={styles.iconButton}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={26}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Stories />
        <PostsWithImages />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default Home;
