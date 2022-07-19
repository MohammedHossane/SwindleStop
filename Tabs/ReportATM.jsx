import { StyleSheet, Text, View } from "react-native";

export default function ReportATM() {
  return (
    <View style={styles.container}>
      <Text> Hello from REPORTATM</Text>
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
