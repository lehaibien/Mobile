import { Component } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"

export default class TrafficLight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.trafficContainer}>
          <View style={{ ...styles.traffic, ...styles.trafficRed }}></View>
          <View style={{ ...styles.traffic, ...styles.trafficYellow }}></View>
          <View style={{ ...styles.traffic, ...styles.trafficGreen }}></View>
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
    backgroundColor: "white",
  },
  trafficContainer: {
    backgroundColor: "black",
    height: "25%",
    width: "20%",
    alignItems: "center",
    padding: 5,
  },
  traffic: {
    flex: 1,
    borderRadius: 50,
    width: "100%",
  },
  trafficRed: {
    backgroundColor: "red",
  },
  trafficYellow: {
    backgroundColor: "yellow",
  },
  trafficGreen: {
    backgroundColor: "green",
  },
})
