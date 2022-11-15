import {Appbar} from 'react-native-paper'

const CustomNavigationBar = ({navigation, options}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={options.title} />
      <Appbar.Action
        icon='menu'
        onPress={navigation.toggleDrawer}
      />
    </Appbar.Header>
  )
}

export default CustomNavigationBar