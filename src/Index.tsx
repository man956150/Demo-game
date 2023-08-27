import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducer';
import AppNavigator from './Navigation/AppNavigator';

const store = createStore(reducer);

const Index = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default Index;

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import InputScreen from './Screens/InputScreen';
// import SaveScreen from './Screens/SaveScreen';


// const Stack = createNativeStackNavigator();

// const Index = () => {

//   return (
//     <NavigationContainer>
//           <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name="RegistrationScreen" component={InputScreen} />
//             <Stack.Screen name="LoginScreen" component={SaveScreen} />
//           </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Index;
