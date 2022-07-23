import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Constants, View, Text, Image, StatusBar,  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

const ReportGas = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [location, setLocation] = React.useState("")
  const [pump, setPump] = React.useState("")
  const [description, setDescription] = React.useState("")

  const getValue = () => {
    console.log(location, description, pump)
    navigation.navigate('Map')
}

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 22, marginRight: 6 }}>
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
          placeholder=''
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBSS0O17zdL_oCDLTKS67aDph6BWwCxgV4',
            language: 'en',
          }}
          textInputProps={{
            InputComp: TextInput,
            underlineColor: 'transparent',
            activeUnderlineColor: 'white',
          }}
          styles={{
            textInput: {
              backgroundColor: '#484848',
            }
          }}
        />
      </View>
      <Text style={styles.pumpword}>Pump:</Text>
      <TextInput onChangeText={(text) => setPump({pump : text})} underlineColor={'transparent'} activeUnderlineColor={'white'} style={styles.pumpimput} keyboardType="number-pad" />

      <Text style={styles.descriptionword}>Description:</Text>
      <TextInput onChangeText={(text) => setDescription({description: text})} underlineColor={'transparent'} multiline={true} style={styles.pumpimput} activeUnderlineColor={'white'}/>
   <View style={styles.submitcontview}>   
      <TouchableHighlight style={styles.submitcont} onPress = {() => getValue()}>
        <Image style={styles.img} width = {{width:87}} height= {{height:31}} source={require('../assets/sumbit.png')} />
      </TouchableHighlight>
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
    paddingTop: 24,
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
    // marginTop: 119,
   // paddingTop: 119
  },
  goback: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 13
  },

  submitcontview:{
    marginTop: 119,
  }
});

//command z to here if need