import { Provider as PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//the navigation stuff that is annoying to deal w/
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import our custom components
import Scan from "./Tabs/Scan";
import Map from "./Tabs/Map";
import Report from "./Tabs/Report";

// ui kit
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View, Image } from "react-native";

// Create an instance of Bottom Tab navigator
const Stack = createNativeStackNavigator();

//display my satufu
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Map">
              <Stack.Screen
                name="Map"
                component={Map}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <Image
                      source={require("./assets/Variant3.jpg")}
                      style={{ width: 32, height: 32 }}
                    />
                  ),
                }}
              />
              {/* <Stack.Screen
            name="Scan"
            component={Scan}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/Group42.jpg")}
                  style={{ width: 32, height: 32 }}
                />
              ),
            }}
          /> */}
              <Stack.Screen
                name="Report Form"
                component={Report}
                options={{
                  headerShown: true,
                  tabBarIcon: () => (
                    <Image
                      source={require("./assets/Group42.jpg")}
                      style={{ width: 32, height: 32 }}
                    />
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

//make look pretty n shi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// bruh

// https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBSS0O17zdL_oCDLTKS67aDph6BWwCxgV4&center=47.66670827132002,-122.3844921033355&zoom=13&format=png&maptype=roadmap&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi.business%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:transit%7Cvisibility:off&size=480x360

// import { Button, Actionsheet, useDisclose, Center } from 'native-base';

function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Actionsheet isOpen={true} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Box w="100%" h={40} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            ></Text>
          </Box>
          <Actionsheet.Item>Scan</Actionsheet.Item>
          <Actionsheet.Item>Report</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
