import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar } from "react-native";

export default function Membership({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <View style={{ color: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 34, marginRight: 17 }}>
                <TouchableHighlight style={styles.goback} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Vector.png')} />
                </TouchableHighlight>
                <View style={styles.membcont}>
                    <Text style={styles.membtext}> Membership</Text>
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
    membcont: {
        
    }
});
