import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 20
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})