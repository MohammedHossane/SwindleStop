import { StyleSheet, Text, View } from "react-native";

export default function Scan() {
  return (
    <View style={styles.container}>
      <Text> Hello from Scan</Text>
      {/* <Image source={} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
