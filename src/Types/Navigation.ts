export type HomeStackParamList = {
  HomeScreen: undefined;
  Messages: undefined;
  Likes: undefined;
};

export type SearchStackParamList = {
  SearchHome: {searchMode?: boolean} | undefined;
  SearchProfile: {username: string};
};
