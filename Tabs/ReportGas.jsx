import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const ReportGas = () => {
    const [text, setText] = React.useState("");

    return (
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
    );
};

export default ReportGas;