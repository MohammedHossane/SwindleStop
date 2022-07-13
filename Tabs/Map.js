import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // drawer is closed when app loads

  const sheetRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let mapRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        zoom: 5,
      };

      setMapRegion(mapRegion);
      setIsMapLoading(false);
    })();
  }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const renderContent = () => {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>Get directions to your location</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{ backgroundColor: "blue" }}>
        <Text>header</Text>
      </View>
    );
  };

  const onExpand = () => {
    console.log("opening drawer");
  };

  const onCollapse = () => {
    console.log("closing drawer");
  };

  return (
    <View style={styles.container}>
      {isMapLoading === true ? (
        <Text style={styles.paragraph}>Waiting</Text>
      ) : null}

      {errorMsg ? <Text style={styles.paragraph}>{errorMsg}</Text> : null}

      {mapRegion === null ? null : (
        <MapView
          style1={styles.mapStyle}
          initialRegion1={{
            latitude: 34.017349,
            longitude: -118.278343,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={mapRegion}
          customMapStyle={mapStyle}
        >
          {/* <Marker coordinate = {{latitude: 34.039660,longitude: -118.378700}}
         pinColor = {"red"} // any color
         title={"Angel's House"}
         description={"This is where Angel lives."}/>   */}

          <Marker
            coordinate={{ latitude: 34.03308, longitude: -118.29202 }}
            pinColor={"lightblue"} // any color
            title={"76 Gas Station"}
            description={"Pump #2, beware"}
          />

          <Marker
            coordinate={{ latitude: 34.03574, longitude: -118.29123 }}
            pinColor={"lightblue"} // any color
            title={"Cheveron Gas Station"}
            description={"Pump #7, beware"}
          />

          <Marker
            coordinate={{ latitude: 34.01781, longitude: -118.29202 }}
            pinColor={"lightblue"} // any color
            title={"ARCO Gas Station"}
            description={"Pump #5, beware"}
          />
        </MapView>
      )}

      <BottomSheet
        enabledBottomClamp={true}
        ref={sheetRef}
        snapPoints={[350, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />

      {/* <BottomDrawer
        onCollapse={onCollapse}
        onExpand={onExpand}
        containerHeight={400}
        offset={0}
        startUp={false}
      >
        {renderContent()}
      </BottomDrawer> */}

      {/* <Actionsheet hideDragIndicator={false} isOpen={isDrawerOpen} onClose={onClose} disableOverlay>
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
      </Actionsheet> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const mapStyle = [
  {
    featureType: "administrative.country",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
      {
        weight: 1.5,
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.government",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.bus",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
