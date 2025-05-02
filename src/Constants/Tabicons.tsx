import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

interface IconProps {
  route: string;
  focused: boolean;
  color: string;
  size: number;
}

export const getTabIcon = ({route, focused, color, size}: IconProps) => {
  let iconName: string;

  switch (route) {
    case 'Home':
      iconName = focused ? 'home' : 'home';
      break;
    case 'Search':
      iconName = focused ? 'search' : 'magnify';
      break;
    case 'Post':
      iconName = focused ? 'plus-box' : 'plus-box-outline';
      break;
    case 'Reels':
      iconName = focused ? 'movie-open' : 'movie-open-outline';
      break;
    case 'Profile':
      iconName = focused ? 'account' : 'account-outline';
      break;
    default:
      iconName = 'help-circle-outline';
  }

  return <MaterialDesignIcons name={iconName} size={size} color={color} />;
};
