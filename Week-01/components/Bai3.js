import { StyleSheet, Text, View } from "react-native"

export default function Bai3() {
  return (
    <View>
      <View>
        <Text style={styles.hoTen}>Họ và tên: Lê Hải Biên</Text>
        <Text style={styles.mssv}>MSSV: 162001499</Text>
        <Text style={styles.ngaySinh}>Ngày sinh: 14/03/2002</Text>
        <Text style={styles.lop}>Lớp: 20DTH5</Text>
      </View>
      <View>
        <Text style={styles.hoTen}>Họ và tên: Ngô Quang Thiện Anh</Text>
        <Text style={styles.mssv}>MSSV: 162001511</Text>
        <Text style={styles.ngaySinh}>Ngày sinh: 22/10/2002</Text>
        <Text style={styles.lop}>Lớp: 20DTH5</Text>
      </View>
      <View>
        <Text style={styles.hoTen}>Họ và tên: Võ Đức Trọng</Text>
        <Text style={styles.mssv}>MSSV: 162001501</Text>
        <Text style={styles.ngaySinh}>Ngày sinh: 31/03/2002</Text>
        <Text style={styles.lop}>Lớp: 20DTH5</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hoTen: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  mssv: {
    color: "red",
    fontSize: 30,
  },
  ngaySinh: {
    color: "#df03fc",
    fontStyle: "italic",
    fontSize: 25,
  },
  lop: {
    color: "blue",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 27,
  },
})
