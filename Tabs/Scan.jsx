import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, PermissionsAndroid } from "react-native";
import {Toast} from 'native-base'
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import { useEffect } from "react";

const requestAccessFineLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Access fine location required for discovery',
      message:
        'In order to perform discovery, you must enable/allow ' +
        'fine location access.',
      buttonNeutral: 'Ask Me Later"',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    }
  );
  console.log(granted)
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const requestAccessBluetoothPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    {
      title: 'Access fine location required for discovery',
      message:
        'In order to perform discovery, you must enable/allow ' +
        'fine location access.',
      buttonNeutral: 'Ask Me Later"',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    }
  );
  console.log(granted)
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export default function Scan({ navigation }) {

  useEffect(() => {
    const connect = async () => {
      console.log('starting');
      try {
        let granted = await requestAccessFineLocationPermission();
  
        console.log(granted)
        if (!granted) {
          console.log('not granted')
          throw new Error(`Access fine location was not granted`);
        }
      } catch (err) {
        console.log(err);
      }
    }

    connect();
  },[])


  const startDiscovery = async () => {
    console.log('starting');
    try {
      let granted = await requestAccessBluetoothPermission();

      console.log(granted)
      if (!granted) {
        console.log('not granted')
        throw new Error(`Access fine location was not granted`);
      }

      try {
        const available = await RNBluetoothClassic.startDiscovery();
        console.log(available)
        // Toast.show({
        //   text: `Found ${unpaired.length} unpaired devices.`,
        //   duration: 2000
        // });
      } finally {
        console.log('finally done')
      }
    } catch (err) {
      console.log(err);
      // Toast.show({
      //   text: err.message,
      //   duration: 2000
      // });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 34, marginRight: 17 }}>
        <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} />
        </TouchableHighlight>
      </View>
      <Text style={styles.putyopohonehere}> Put your phone up to the card receiver</Text>

      <Image style={styles.radarrr} source={require('../assets/radarrrr.png')} />
      <TouchableHighlight onPress={startDiscovery}>
        <Image style={styles.claicktoascan} source={require('../assets/scanforskimmer.png')} />
      </TouchableHighlight>


      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#1F1F1F',
    height: '100%'
  },
  putyopohonehere: {
    fontSize: 36,
    // paddingTop: 62,
    marginTop: 42,
    // top: 62,
    marginLeft: 25,
    marginRight: 25,
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  radarrr: {
    top: 74,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  claicktoascan: {
    top: 140,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 350,
    height: 77,
    borderRadius: 49
  },
  goback: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 13
  },

});
