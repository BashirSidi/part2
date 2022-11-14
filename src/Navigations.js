/* eslint-disable no-unused-vars */
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./DrawerScreens/HomeScreen";
import CustomNavigationBar from './Components/CustomNavigationBar';
import CustomNavigationDrawer from "./Components/CustomNavigationDrawer";
import Profile from './DrawerScreens/ProfileScreen';
import {Text} from "react-native";


const TestStack = createNativeStackNavigator();
const Test = () => (
  <TestStack.Navigator
    screenOptions={{header: props => <CustomNavigationBar {...props} />}}
  >
    <TestStack.Screen
      name="TestStack"
      component={Bashir}
      options={{title: 'TestStack.....'}}
    />
  </TestStack.Navigator>
);

const Bashir = () => {
  return (
    <Text>Bashir bashir</Text>
  )
}


const Drawer = createDrawerNavigator();

const NavigationContents = ({navigation}) => {
  return (
    // screenOptions={{drawerPosition:'right'}}
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} /> }
    >
      <Drawer.Screen
        name='Home'
        component={Test}
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