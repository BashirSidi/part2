/* eslint-disable no-unused-vars */
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./DrawerScreens/HomeScreen";
import CustomNavigationDrawer from "./Components/CustomNavigationDrawer";
import Profile from './DrawerScreens/ProfileScreen';



const Drawer = createDrawerNavigator();

const NavigationContents = ({navigation}) => {
  return (
    // screenOptions={{drawerPosition:'right'}}
    <Drawer.Navigator
      screenOptions={{
        headerShown: true
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} /> }
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
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