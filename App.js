import 'react-native-gesture-handler';
import {StatusBar} from "react-native";
import Navigation from "./src/Navigations";
import { Provider as PaperProvider } from 'react-native-paper';
 
const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content"/>
      <Navigation />
    </PaperProvider>
  );
};
 
export default App;
