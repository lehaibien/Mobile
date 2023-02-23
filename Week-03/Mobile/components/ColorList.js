import { View, FlatList, StyleSheet, Text } from "react-native"
import React, { Component } from "react"

export default class ColorList extends Component {
  render() {
    let colorList = [
      {
        id: 1,
        title: "Đỏ",
        color: "red",
      },
      {
        id: 2,
        title: "Cam",
        color: "orange",
      },
      {
        id: 3,
        title: "Vàng",
        color: "yellow",
      },
      {
        id: 4,
        title: "Lục",
        color: "green",
      },
      {
        id: 5,
        title: "Lam",
        color: "blue",
      },
      {
        id: 6,
        title: "Chàm",
        color: "indigo",
      },
      {
        id: 7,
        title: "Tím",
        color: "purple",
      },
    ]
    return (
      <FlatList
        style={{ marginTop: 30 }}
        data={colorList}
        renderItem={({ item }) => (
          <View style={{ ...styles.item, ...{ backgroundColor: item.color } }}>
            <View style={styles.circle}></View>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    top: 5,
    left: 5,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    flex: 1,
  },
})
