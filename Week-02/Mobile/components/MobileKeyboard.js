import { Component } from "react"
import { View, StyleSheet } from "react-native"

export default class MobileKeyboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.keyboardContainer}>
          <View>
            <View>
              <Text>Q</Text>
            </View>
            <View>
              <Text>W</Text>
            </View>
            <View>
              <Text>E</Text>
            </View>
            <View>
              <Text>R</Text>
            </View>
            <View>
              <Text>T</Text>
            </View>
            <View>
              <Text>Y</Text>
            </View>
            <View>
              <Text>U</Text>
            </View>
            <View>
              <Text>I</Text>
            </View>
            <View>
              <Text>O</Text>
            </View>
            <View>
              <Text>P</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  keyboardContainer: {
    backgroundColor: "lightgray",
    height: "35%",
    width: "100%",
  },
  keyboardRow: {
    flex: 1,
  },
})
