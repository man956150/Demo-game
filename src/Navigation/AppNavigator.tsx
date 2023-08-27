
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddItemScreen from '../Screens/InputScreen';
import DisplayItemsScreen from '../Screens/SaveScreen';

const AppNavigator = createStackNavigator(
  {
    Add: AddItemScreen,
    Display: DisplayItemsScreen,
  },
  { 
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
  },
    initialRouteName: 'Add',
  }
);

export default createAppContainer(AppNavigator);
