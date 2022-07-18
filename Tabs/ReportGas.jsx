import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Constants, View, Text } from 'react-native';


const ReportGas = () => {
    const [text, setText] = React.useState("");

    return (
      <View style={styles.container}>
    <GooglePlacesAutocomplete
    placeholder='Search'
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    query={{
      key: 'AIzaSyBSS0O17zdL_oCDLTKS67aDph6BWwCxgV4',
      language: 'en',
    }}
  />,
    <TextInput
      label="Pump #"
      value={text}
      onChangeText={text => setText(text)}
    />
    </View>
    );
};

export default ReportGas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
});