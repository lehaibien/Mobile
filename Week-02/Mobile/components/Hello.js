import React, { Component } from "react"
import { View, Text } from "react-native"

class Hello extends Component {
  constructor() {
    super()
    console.log("constructor")
  }

  componentDidMount() {
    console.log("ComponnetDidMount")
  }
  render() {
    console.log("render")
    return (
      <View>
        <Text> Hello </Text>
      </View>
    )
  }
}
