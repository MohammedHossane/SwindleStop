import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";



export default function Membership({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#1F1F1F',
    height: '100%'
  },
  skimmerlocation: {
    fontSize: 30,
    paddingTop: 36,
    marginLeft: 13,
    color: '#FFFFFF'
  },
  blueaddy: {
    fontSize: 24,
    marginLeft: 13,
    color: '#629FE7',
  },
  bigahbarcontainer1: {
    width: 340,
    height: 2,
    backgroundColor: '#BCBCBC',
    borderRadius: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    top: 30
  },
  bigahbar1: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  prevrep: {
    color: '#FFFFFF',
    fontSize: 24,
    paddingTop: 38,
    marginLeft: 13,
  },
  date1: {
    color: '#E1E1E1',
    fontSize: 20,
    paddingTop: 25,
    marginLeft: 13,
  },
  desc1: {
    color: '#E1E1E1',
    fontSize: 20,
    marginLeft: 13,
    paddingTop: 10
  },
  smallahbar1: {
    width: 320,
    height: 2,
    backgroundColor: '#323232',
    borderRadius: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    top: 25
  },
  date2: {
    color: '#E1E1E1',
    fontSize: 20,
    paddingTop: 44,
    marginLeft: 13,

  },
  desc2: {
    color: '#E1E1E1',
    fontSize: 20,
    marginLeft: 13,
    paddingTop: 10
  },
  smallahbar2: {
    width: 320,
    height: 2,
    backgroundColor: '#323232',
    borderRadius: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    top: 25
  },
  payup: {
    fontSize: 28,
    color: '#BABABA',
    textAlign: 'center',
    paddingTop: 27,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    top: 27
  },
  goback: {
 
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 13
  },
report1: {
}
});
