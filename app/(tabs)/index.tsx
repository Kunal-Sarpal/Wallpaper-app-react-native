import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text } from 'react-native';
import { View } from 'react-native';


const Tab = createMaterialTopTabNavigator();

function Foryou() {
  return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>

  );
}

function HomeScreen(){
  return (
    <View><Text>HomeScreen</Text></View>
  )
}
function SettingsScreen(){
  return (
    <View><Text>HomeScreen</Text></View>
  )
}
function LibraryScreen(){
  return (
    <View><Text>HomeScreen</Text></View>
  )
}

export default Foryou;