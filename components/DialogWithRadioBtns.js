import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { TextComponent } from './DialogTextComponent';



const DialogWithRadioBtns = ({ visible, close, confirm }) => {
  const [checked, setChecked] = React.useState('normal');

  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Skimmer Type</Dialog.Title>
        <Dialog.ScrollArea style={styles.container}>
          <ScrollView>
            <View>
              <TouchableRipple onPress={() => setChecked('normal')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="normal"
                      status={checked === 'normal' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    ATM
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('second')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="second"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    Gas Station
                  </TextComponent>
                </View>
              </TouchableRipple>
       
            </View>
          </ScrollView>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={close}>Cancel</Button>
          <Button onPress={confirm}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWithRadioBtns;

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
    fontFamily: "Rubik-Regular",
  },
});