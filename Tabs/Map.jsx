import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, TouchableHighlight, Image } from "react-native";
import * as Location from "expo-location";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  RadioButton,
  TouchableRipple,
  Button,
  Portal,
  Dialog,
} from "react-native-paper";
import { Modal, Overlay } from "native-base";
import { TextComponent } from '../components/DialogTextComponent';
// import { TouchableHighlight } from "react-native-gesture-handler";



export default function Map({ navigation }) {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // drawer is closed when app loads
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = React.useState('normal');


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

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["10%", "60%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>

    {/* <Text style = {{color: 'red', fontSize: 30, top: 200, zIndex: 1}}> Hello does this work?  </Text> */}
      {isMapLoading === true ? (
        <Text style={styles.paragraph}>Waiting</Text>
      ) : null}

      {errorMsg ? <Text style={styles.paragraph}>{errorMsg}</Text> : null}

      {mapRegion === null ? null : (
        <>
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

          <Marker coordinate={{ latitude: 34.039660, longitude: -118.378700 }}
            pinColor={"red"} // any color
            title={"Angel's House"}
            description={"This is where Angel lives."} />

          <Marker
            coordinate={{ latitude: 34.03308, longitude: -118.29202 }}
            pinColor={"lightblue"} // any color
            title={"76 Gas Station"}
            description={"Pump #2, beware"}
            image={require('../assets/Group236.png')}
          />

          <Marker
            coordinate={{ latitude: 34.03574, longitude: -118.29123 }}
            pinColor={"lightblue"} // any color
            title={"Cheveron Gas Station"}
            description={"Pump #7, beware"}
            image={require('../assets/Group236.png')}
          />

          <Marker
            coordinate={{ latitude: 34.01781, longitude: -118.29202 }}
            pinColor={"lightblue"} // any color
            title={"ARCO Gas Station"}
            description={"Pump #5, beware"}
            image={require('../assets/Group236.png')}
          />
        </MapView>
        <TouchableHighlight style={styles.membbut} onPress={() => navigation.navigate("Membership")}>
              <Image source={require('../assets/memb.png')} />
            </TouchableHighlight> 
        </>
      )}
      <BottomSheet
        style={styles.scrollthing}
        ref={bottomSheetRef}
        index={1}
        handleComponent={() =>
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}></View>
          </View>
        }
        backgroundComponent={() =>
          <View style={styles.contentContainer} />
        }

        snapPoints={[80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103
          , 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125
          , 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147
          , 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169
          , 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191
          , 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213
          , 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235
          , 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257
          , 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279
          , 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301
          , 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323
          , 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345
          , 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367
          , 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389
          , 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 407, 408, 409, 410
          , 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432
          , 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454
          , 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476
          , 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498
          , 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520
          , 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542
          , 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564
          , 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586
          , 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608
          , 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630
          , 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652
          , 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674
          , 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696
          , 697, 698, 699, 700,]}
        overDragResistanceFactor={0.1}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          {/* <View style={styles.member}>
            <TouchableHighlight style={styles.membbut} onPress={() => navigation.navigate("Membership")}>
              <Image source={require('../assets/memb.png')} />
            </TouchableHighlight>
          </View> */}
          <View style={styles.btns}>
            <TouchableHighlight style={styles.butt0n} onPress={() => navigation.navigate("Scan")}>
              <Image source={require('../assets/scanbutton.png')} />
            </TouchableHighlight>

            <TouchableHighlight style={styles.butt0n} onPress={() => navigation.navigate("Report Form")}>
              <Image source={require('../assets/reportbutton.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.reportbox}>
            {/* <View style={styles.blackbar}>
              <Text> kfklsfka.</Text>
            </View> */}
            <View style={styles.blackbarContainer1}>
              <View style={styles.blackbar1}>
              </View>
            </View>
            <Text style={styles.textreport}> Report</Text>
            <View style={styles.viewhistory}>
              <TouchableHighlight style={styles.viewhistory2} onPress={() => {
                navigation.navigate('Report1GS');
              }}>
                <View>
                  <Text style={styles.textminute}> 1 min ago</Text>
                  <Text style={styles.texttitle}> Skimmer reported at pump <Text style={styles.textblue}>7</Text></Text>
                  <Text style={styles.textlocation}> 2400 E Slauson Ave, Huntington Park, CA 20255</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.blackbarContainer2}>
              <View style={styles.blackbar2}>
              </View>
            </View>
            <TouchableHighlight style={styles.viewhistory2} onPress={() => {
              navigation.navigate('Report1ATM');
            }}>
              <View>
                <Text style={styles.textminute}> 5 min ago</Text>
                <Text style={styles.texttitle}> Skimmer reported at <Text style={styles.textblue}>ATM</Text></Text>
                <Text style={styles.textlocation}> 112 E St Bellingham, WA 98255 </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.blackbarContainer3}>
              <View style={styles.blackbar3}>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: '#1F1F1F'

  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: '#1F1F1F'
  },
  butt0n: {
    width: 180,
    height: 43,
    backgroundColor: '#629FE7',
    borderRadius: 36,
    alignItems: 'center',
    color: 'white',
    // fontFamily: 'Rubik-Regular'
  },
  scrollthing: {
    backgroundStyle: 'blue'
  },
  closeLineContainer: {
    alignSelf: 'center'
  },
  closeLine: {
    width: 141,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    marginBottom: 15,
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#1F1F1F',
    display: 'flex'
  },
  textlocation: {
    fontSize: 14,
    color: '#ABABAB',
    paddingTop: 18,
    paddingLeft: 14,
    paddingBottom: 19

  },
  textminute: {
    fontSize: 12,
    color: '#B4B4B4',
    paddingTop: 11,
    paddingLeft: 14,

  },
  texttitle: {
    fontSize: 20,
    color: '#FFFFFF',
    paddingTop: 8,
    paddingLeft: 14,

  },
  textblue: {
    color: '#629FE7'
  },
  textreport: {
    color: '#F5F5F5',
    fontSize: 17,
    paddingTop: 20.57,
    paddingLeft: 14,

  },

  //BLACK BARS

  blackbar1: {
    width: 352,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 2,
    top: 15
  },
  blackbar2: {
    width: 354,
    height: 2,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  blackbar3: {
    width: 354,
    height: 2,
    backgroundColor: '#000000   ',
    borderRadius: 2,
  },
  blackbarContainer1: {
    width: '100%',
    alignItems: 'center',
  },
  blackbarContainer2: {
    width: '100%',
    alignItems: 'center',
  },
  blackbarContainer3: {
    width: '100%',
    alignItems: 'center',
  },
  membbut: {
    position: "absolute",
    left: 10,
    top: 30

  }

});

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#88c1e2"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#44728d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
