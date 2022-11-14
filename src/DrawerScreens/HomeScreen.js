import {Text} from 'react-native'
import { Button } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <>
      <Text>HomeScreen</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </>
  )
}

export default HomeScreen;