import { StatusBar } from "expo-status-bar";
// This will handle our Tab Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Import our custom components
import Profile from "./Tabs/Profile";
import Map from "./Tabs/Map";
// ui kit
import { NativeBaseProvider, Box } from "native-base";

import { StyleSheet, Text, View, Image } from "react-native";

// Create an instance of Bottom Tab navigator
const Tabs = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Map">
        <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon: () => 
          (<Image source={require('./assets/Group42.jpg')} style={{ width: 32, height: 32 }}/>)}} />
        <Tabs.Screen name="Map" component={Map} options={{tabBarIcon: () => 
          (<Image source={require('./assets/Variant3.jpg')} style={{ width: 32, height: 32 }}/>)}} />
      </Tabs.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

// export default function Stack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Map">
//         <Stack.Screen name="Profile" component={Profile} options={{tabBarIcon: () => 
//           (<Image source={require('./assets/Group42.jpg')} style={{ width: 32, height: 32 }}/>)}} />
//         <Stack.Screen name="Map" component={Map} options={{tabBarIcon: () => 
//           (<Image source={require('./assets/Variant3.jpg')} style={{ width: 32, height: 32 }}/>)}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBSS0O17zdL_oCDLTKS67aDph6BWwCxgV4&center=47.66670827132002,-122.3844921033355&zoom=13&format=png&maptype=roadmap&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi.business%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:transit%7Cvisibility:off&size=480x360
