// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

 
import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';
import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';
 
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};
 
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
 
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
 
export default App;
