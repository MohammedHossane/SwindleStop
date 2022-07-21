import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Constants, View, Text, Image, StatusBar } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

const ReportGas = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const saeInput = (
    <Sae
      label={'Email Address'}
      iconClass={FontAwesomeIcon}
      iconName={'pencil'}
      iconColor={'white'}
      inputPadding={16}
      labelHeight={24}
      // active border height
      borderHeight={2}
      // TextInput props
      autoCapitalize={'none'}
      autoCorrect={false}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{color: 'white',flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.reporttext}> Report Form</Text>
      </View>
      <Text style={styles.locationword}> Location:</Text>
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
      <Text style={styles.pumpword}>Pump:</Text>
      <TextInput style={styles.pumpimput}></TextInput>
      <Text style={styles.descriptionword}>Description:</Text>
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
    textAlign: 'center',
    color: '#FFFFFF',
    paddingTop: 33
  },
  locationword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 44
  },
  textlocation: {
    flexDirection: 'row',
    paddingTop: 9
  },
  pumpword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 34,
  },
  pumpimput: {
    top: 9,
    backgroundColor: '#484848',
    borderRadius: 5,
    
  },
  descriptionword: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 34,
  },
  descimput: {
    top: 9
  },
  submitcont: {
    alignItems: 'center',
    paddingTop: 119
  },
  goback: {
   top: 22,
   right: 6,
   paddingLeft: 13,
   paddingRight: 13,
   paddingTop: 13,
   paddingBottom: 13
  }
});

//command z to here if need