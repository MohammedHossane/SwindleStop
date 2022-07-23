import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Constants, View, Text, Image, StatusBar, TouchableHighlight } from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';


const ReportATM = ({ navigation }) => {
    // const [text, setText] = React.useState("");
    const [location, setLocation] = React.useState("")
    const [description, setDescription] = React.useState("")

    const getValue = () => {
        console.log(location, description)
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
            <Text style={styles.locationword}> Location</Text>
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
                            color: 'white'
                        }
                    }}
                />
            </View>
            <Text style={styles.descriptionword}>Description</Text>
            <TextInput
                underlineColor={'transparent'}
                activeUnderlineColor={'white'}
                onChangeText={(text) => setDescription({ descriptionATM: text })}
                style={styles.descimput}>

            </TextInput>

            <TouchableHighlight style={styles.submitcont} onPress = {() => getValue()}>
                <Image source={require('../assets/sumbit.png')} />
            </TouchableHighlight>
        </View>
    );
};

export default ReportATM;

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
        top: 28,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 13,
        paddingBottom: 13
    },
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
        top: 9
    },
    descriptionword: {
        color: '#FFFFFF',
        fontSize: 28,
        paddingTop: 24,
    },
    descimput: {
        top: 9,
        backgroundColor: '#484848'
    },
    submitcont: {
        alignItems: 'center',
        top: 258,
    },
    goback: {
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 13,
        paddingBottom: 13
    }
});