import { Component } from "react"
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 20 }}>Username</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 20 }}>Password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: "70%",
    height: 40,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 10,
    height: 60,
    width: "50%",
  },
  btnText: {
    color: "white",
    fontSize: 25,
  },
})
