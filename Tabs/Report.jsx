import * as React from 'react';
import { ScrollView, View, StyleSheet, TouchableHighlight, Text, Image, StatusBar } from 'react-native';

import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { TextComponent } from '../components/DialogTextComponent';
import DialogWithRadioBtns from '../components/DialogWithRadioBtns';



const Report = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState('normal');

  const [page, setPage] = React.useState('');

  const openDialog = () => {
    setVisible(true)
  }
  const closeDialog = () => {
    console.log('user cancelled')
    setVisible(false)
  }

  const confirmDialog = () => {
    console.log('user confirmed/clicked ok')
    setVisible(false)
  }

  return (
    <View style={styles.reportpage}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} />
        </TouchableHighlight>
      </View>
      {/* <ScrollView> */}
      {/* <View> */}
      <Text style={styles.reporttext}> Report Form</Text>
      <TouchableHighlight style={styles.submitbutton} onPress={() => {
        // console.log(page)
        navigation.navigate(checked);
      }}>
        <Image source={require('../assets/sumbit.png')} />
      </TouchableHighlight>
      <View style={styles.greythinggy} >
        <Text style={styles.skimmertype}> Skimmer Type</Text>
        <TouchableRipple onPress={() => setChecked('Report ATM')}>
          <View style={styles.row}>
            <View pointerEvents="none">
              <RadioButton
                color = 'white'
                value="Report ATM"
                status={checked === 'Report ATM' ? 'checked' : 'unchecked'}
              // onPress = {() => setPage('')}
              />
            </View>
            <TextComponent isSubheading style={styles.radioText}>
              ATM
            </TextComponent>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setChecked('Report Gas Station')}>
          <View style={styles.row}>
            <View pointerEvents="none">
              <RadioButton
                color = 'white'
                value='Report Gas Station'
                status={checked === 'Report Gas Station' ? 'checked' : 'unchecked'}

              />
            </View>
            <TextComponent isSubheading style={styles.radioText}>
              Gas Station
            </TextComponent>
          </View>
        </TouchableRipple>
      </View>
      {/* <TouchableHighlight> <Image source={require('../assets/scanbutton.png')}/> </TouchableHighlight> */}


      {/* </View> */}
      {/* </ScrollView> */}
    </View>

  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    maxHeight: 170,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
  reportpage: {
    backgroundColor: '#1F1F1F',
    height: '100%'
  },
  reportform: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 100,
  },
  submitbutton: {
    alignItems: 'center',
    top: 514,
  },
  greythinggy: {
    width: 329,
    height: 268,
    alignSelf: 'center',
    backgroundColor: '#484848',
    borderRadius: 19,
  },
  skimmertype: {
    color: '#FFFFFF',
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 36,
    marginBottom: 10
  },
  radioText: {
    color: '#FFFFFF',
    fontSize: 28,
    paddingVertical: 12
  },
  goback: {
    top: 34,
    right: 17
   },
   reporttext: {
    fontSize: 40,
    paddingTop: 48,
    textAlign: 'center',
    color: '#FFFFFF'
  },
});