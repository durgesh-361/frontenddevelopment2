import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './pages/HomeScreen';
import SideMenu from './pages/SideMenu';
import StartPage from './pages/StartPage'
import HtmlPage from './pages/HtmlPage';
import CssPage from './pages/CssPage';
import JavascriptPage from './pages/JavascriptPage';
import JqueryPage from './pages/JqueryPage';

const Drawer = createDrawerNavigator();

function App() {
  return (
  <NavigationContainer>
    <Drawer.Screen name="Start" component={StartPage} />
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />} >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Html" component={HtmlPage} />
        <Drawer.Screen name="Css" component={CssPage} />
        <Drawer.Screen name="Javascript" component={JavascriptPage} />
        <Drawer.Screen name="Jquery" component={JqueryPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

