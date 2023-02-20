const sumSquare = (a, b) => `Kết quả của ${a}^2 + ${b}^2 là ${a * a + b * b}`
console.log(sumSquare(1, 2))
const printOddNumbers = () => {
  let count = 0
  for (let i = 51; i <= 100; i += 2) {
    count++
    console.log(`Số lẻ thứ ${count} là ${i}`)
  }
  return `Số số lẻ trong khoảng từ 50 đến 100 là ${count}`
}
console.log(printOddNumbers())
const data = [
  { id: 1, ten: "Sách Toán", loai: "Sách" },
  { id: 2, ten: "Sách Văn", loai: "Sách" },
  { id: 3, ten: "Conan", loai: "Truyện" },
  { id: 4, ten: "Sherlock Holmes", loai: "Tiểu thuyết" },
  { id: 5, ten: "Doraemon", loai: "Truyện" },
]
const sach = data.filter((obj) => obj.loai == "Sách")
const sach3 = data.find((obj) => obj.id == 3)
const tieuThuyet = data.some((obj) => obj.loai == "Tiểu thuyết")
