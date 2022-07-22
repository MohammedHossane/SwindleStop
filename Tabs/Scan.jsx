import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";

export default function Scan({ navigation }) {
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
      <Image style={styles.claicktoascan} source={require('../assets/scanforskimmer.png')} />


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
    marginTop: 62,
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
