import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";

export default function ReportATMRep1({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 34, marginRight: 17 }}>
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

            <Text style={styles.datepump}> Date: July 9th, 2022 </Text>
            <Text style={styles.desc1}> Description: ...</Text>


            <View>
            </View>
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
        fontSize: 30,
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
    datepump: {
        color: '#F2F2F2',
        fontSize: 30,
        paddingTop: 38,
        marginLeft: 13,
    },
    datepump1: {
        color: '#F2F2F2',
        fontSize: 30,
        marginLeft: 6,
        
    },
    report1: {
        backgroundColor: 'red'
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
        paddingTop: 33,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        top: 14
    },
    goback: {

        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 13,
        paddingBottom: 13
    },

});
