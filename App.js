import { Provider as PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//the navigation stuff that is annoying to deal w/
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import our custom components
import Scan from "./Tabs/Scan";
import Map from "./Tabs/Map";
import Report from "./Tabs/Report";
import ReportGas from "./Tabs/ReportGas";
import ReportATM from "./Tabs/ReportATM";

//import report pages
import Report1ATM from "./ReportPages/Report1ATM";
import Report1GS from "./ReportPages/Report1GS";

//import report pages pages
import ReportATMRep1 from "./ReportPagesPages/ReportATMRep1";
import ReportGSRep1 from "./ReportPagesPages/ReportGSRep1";


// ui kit
import { NativeBaseProvider, Box, Modal } from "native-base";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

// Create an instance of Bottom Tab navigator
const Stack = createNativeStackNavigator();

//display my satufu
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Stack.Navigator initialRouteName="Map">

              <Stack.Screen
                name="Map"
                component={Map}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="Report Form"
                component={Report}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="Report Gas Station"
                component={ReportGas}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="Report ATM"
                component={ReportATM}
                options={{
                  headerShown: false,
                }}
              />

              {/* here goes the other stuff for the pages like the report pages uk */}

              <Stack.Screen
                name="Report1ATM"
                component={Report1ATM}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="Report1GS"
                component={Report1GS}
                options={{
                  headerShown: false,
                }}
              />

              {/* here goes the report pages within the report pages */}

              <Stack.Screen
                name="ReportGSRep1"
                component={ReportGSRep1}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="ReportATMRep1"
                component={ReportATMRep1}
                options={{
                  headerShown: false,
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
