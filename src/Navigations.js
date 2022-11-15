/* eslint-disable no-unused-vars */
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./DrawerScreens/HomeScreen";
import CustomNavigationBar from './Components/CustomNavigationBar';
import CustomNavigationDrawer from "./Components/CustomNavigationDrawer";
import Profile from './DrawerScreens/ProfileScreen';
import {Text} from "react-native";


const MyStack = createNativeStackNavigator();
const HomeStack = () => (
  <MyStack.Navigator
    screenOptions={{header: props => <CustomNavigationBar {...props} />}}
  >
    <MyStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{title: 'Home Screen'}}
    />
  </MyStack.Navigator>
);


const Drawer = createDrawerNavigator();

const NavigationContents = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition:'right'
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} /> }
    >
      <Drawer.Screen
        name='Home'
        component={HomeStack}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationContents /> 
    </NavigationContainer>
  )
}

export default Navigation;