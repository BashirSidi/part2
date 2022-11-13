import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import SplashImage from '../assets/splash.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
 
const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 2000);
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={SplashImage}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#000"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;

