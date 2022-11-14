/* eslint-disable no-unused-vars */
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {Platform, StyleSheet, View} from 'react-native';
import { Drawer } from 'react-native-paper';
import Text from './Text';
import theme from '../theme';

const CustomNavigationDrawer = ({theme, ...navProps}) => {
  const {state, navigation} = navProps;

  const isActive = index => index === state.index;

  return (
    <DrawerContentScrollView {...navProps}>
      {state.routes.map((route, index) => (
        <Drawer.Item
          key={route.key}
          label={route.name}
          accessibilityLabel={route.name}
          icon={route.iconName}
          active={isActive(index)}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  )
}

export default CustomNavigationDrawer;