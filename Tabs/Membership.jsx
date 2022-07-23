import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";

export default function Membership({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 34, marginRight: 17 }}>
                <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Vector.png')} />
                </TouchableHighlight>
                <Text style={styles.membtext}> Membership</Text>

                <View style={styles.freecont}>
                    <Text style={styles.freetxt}> Free </Text>
                    <Text style={styles.evrtxt}> Everything you've enjoyed so far.</Text>
                </View>

                <View style={styles.membcont}>
                    <Text style={styles.freetxt}> Membership </Text>
                    <Text style={styles.memb1txt}> $1.99 Monthly</Text>
                    <Text style={styles.memb1txt}> Bluetooth Skim Scanner</Text>
                    <Text style={styles.memb1txt}> Location History (Beyond 30 Days)</Text>
                    <Text style={styles.memb1txt}> Weekly Bank Check-In Notifier</Text>
                </View>

                <View style={styles.businesscont}>
                    <Text style={styles.busitxt}> Business Membership </Text>
                    <Text style={styles.bus1txt}> $9.99 Monthly</Text>
                    <Text style={styles.bus1txt}> Instant Notification Of Skimmer In Your Specific Location</Text>
                    <Text style={styles.bus1txt}> SwindleStop QR Code Sticker </Text>
                    <Text style={styles.bus1txt}> (Membership Included)</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1F1F1F',
        height: '100%'
    },
    goback: {
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 13,
        paddingBottom: 13,
    },

    //member text
    membtext: {
        color: '#FFFFFF',
        fontSize: 40,
        textAlign: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 33
    },

    //free container
    freecont: {
        width: 348,
        height: 118,
        borderRadius: 10,
        backgroundColor: '#484848',
        top: 54,
    },
    freetxt: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 18
    },
    evrtxt: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 60
    },

    //member container
    membcont: {
        backgroundColor: '#629FE7',
        width: 348,
        height: 176,
        borderRadius: 10,
        top: 70,
    },
    memb1txt: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 1
    },

    //buisness container
    businesscont: {
        backgroundColor: '#EEEEEE',
        width: 348,
        height: 203,
        borderRadius: 10,
        top: 90,
    },
    busitxt: {
        color: '#434343',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 1,
        paddingTop: 18,
        fontWeight: 'bold',

    },
    bus1txt: {
        color: '#434343',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 1
    },
});
