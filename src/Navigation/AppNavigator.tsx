
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WinnerInputScreen  from '../Screens/InputScreen';
import SaveScreen from '../Screens/SaveScreen';
const AppNavigator = createStackNavigator(
  {
    Add: WinnerInputScreen,
    Display: SaveScreen,
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
