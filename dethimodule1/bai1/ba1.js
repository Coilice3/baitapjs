function findAvg(a, b, c) {
    let diem = [a, b, c]
    let sum = 0
    let count = 0
    for (value of diem) {
        sum += value
        count++
    }
    document.write(sum / count)
}
findAvg(4, 5, 6)