import { Component } from "react"
import { StyleSheet } from "react-native"

export default class Light extends Component {
  constructor(color) {
    super()
    this.color = color
    this.styles = StyleSheet.create({
      light: {
        flex: 1,
        borderRadius: 50,
        width: "100%",
        backgroundColor: this.color,
      },
    })
  }
  render() {
    return <View style={this.styles.light}></View>
  }
}
