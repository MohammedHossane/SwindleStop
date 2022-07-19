import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Constants, View, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const ReportGas = ({ navigation }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={{color: 'white',flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.reporttext}> Report Form</Text>
      </View>
      <Text style={styles.locationword}> Location</Text>
      <View style={styles.textlocation}>
        <GooglePlacesAutocomplete
          placeholder='Enter Location'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBSS0O17zdL_oCDLTKS67aDph6BWwCxgV4',
            language: 'en',
          }}
        />
      </View>
      <Text style={styles.pumpword}>Pump</Text>
      <TextInput style={styles.pumpimput}></TextInput>
      <Text style={styles.descriptionword}>Description</Text>
      <TextInput style={styles.descimput}></TextInput>
      <View style={styles.submitcont}>
        <Image source={require('../assets/sumbit.png')} />
      </View>
    </View>
  );
};

export default ReportGas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    backgroundColor: '#1F1F1F',
  },
  reporttext: {
    fontSize: 40,
    paddingTop: 100,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  locationword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 44,
  },
  textlocation: {
    top: 9,
    flexDirection: 'row'
  },
  pumpword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 34,
  },
  pumpimput: {
    top: 13

  },
  descriptionword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 21
  },
  descimput: {
    top: 19
  },
  submitcont: {
    top: 96,
    alignItems: 'center'
  },
  goback: {
    width: 40,
    top: 28
 
  }
});