import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { TextComponent } from '../components/DialogTextComponent';
import DialogWithRadioBtns from '../components/DialogWithRadioBtns';



const Report = () => {
  const [visible, setVisible] = React.useState(false);
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
    <View>
      <DialogWithRadioBtns visible={visible} close={closeDialog} confirm={confirmDialog} />
      <Button mode="contained" onPress={openDialog} compact={true}>
        Report
      </Button>
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
});