import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";



export default function Report1ATM({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Vector.png')} />
        </TouchableHighlight>
      </View>
      <Text style={styles.skimmerlocation}> Skimmer Location: </Text>
      <Text style={styles.blueaddy}>112 E Holly St Bellingham, WA 98225 </Text>

      <View style={styles.bigahbarcontainer1}>
        <View style={styles.bigahbar1}>
        </View>
      </View>

      <Text style={styles.prevrep}> Previous Reports</Text>


      <TouchableHighlight style={styles.report1} onPress={() => {
        navigation.navigate('ReportATMRep1');
      }}>
        <View>
          <Text style={styles.date1}> Date: July 9th, 2022</Text>
          <Text style={styles.desc1}> Description: ...</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.smallahbar1}>
      </View>

      <Text style={styles.date2}> Date: July 4th, 2022</Text>
      <Text style={styles.desc2}> Description: ...</Text>

      <Text style={styles.smallahbar2}> Bar goes here</Text>

      <Text style={styles.date2}> Date: June 30th, 2022</Text>
      <Text style={styles.desc2}> Description: ...</Text>

      <Text style={styles.smallahbar2}> Bar goes here</Text>

      <Text style={styles.payup}> To see past 30 days please buy a Membership.</Text>
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
    top: 34,
    right: 17,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 13
  },
report1: {
}
});
