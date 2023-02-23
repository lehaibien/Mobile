import { Component } from "react"
import Light from "./Light"
import { View } from "react-native"

export default class TrafficLight extends Component {
  render() {
    return (
      <View style={styles.trafficContainer}>
        <Light color="red"></Light>
      </View>
    )
  }
}
