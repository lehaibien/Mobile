import { StyleSheet, Text, View } from "react-native"

export default function Bai4() {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "red" } }}>
        <Text style={styles.color}>Đỏ</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "orange" } }}>
        <Text style={styles.color}>Cam</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "yellow" } }}>
        <Text style={styles.color}>Vàng</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "green" } }}>
        <Text style={styles.color}>Lục</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "blue" } }}>
        <Text style={styles.color}>Lam</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "indigo" } }}>
        <Text style={styles.color}>Chàm</Text>
      </View>
      <View style={{ ...styles.colorView, ...{ backgroundColor: "purple" } }}>
        <Text style={styles.color}>Tím</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  colorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  color: {
    fontSize: 30,
    fontWeight: "bold",
  },
})
