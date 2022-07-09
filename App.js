import { StatusBar } from "expo-status-bar";
// This will handle our Tab Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Import our custom components
import Profile from "./Tabs/Profile";
import Map from "./Tabs/Map";

import { StyleSheet, Text, View } from "react-native";

// Create an instance of Bottom Tab navigator
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Map" component={Map} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
