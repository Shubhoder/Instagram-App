export type HomeStackParamList = {
  HomeScreen: undefined;
  Messages: undefined;
  Likes: undefined;
};

export type SearchStackParamList = {
  SearchHome: {searchMode?: boolean} | undefined;
  SearchProfile: {username: string};
};

export type TabParamList = {
  Home: undefined;
  Search: {
    screen?: 'SearchHome' | 'Search';
    params?: {
      searchMode?: boolean;
    };
  };
  Post: undefined;
  Reels: undefined;
  Profile: undefined;
};
