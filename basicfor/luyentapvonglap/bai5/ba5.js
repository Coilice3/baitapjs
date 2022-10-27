let a = 0, b = 1, tp, sum = 0
let n = 20
while(n){
    tp = a
    a = a + b
    b = tp
    document.write(a + ' ')
    n--
    sum+= a
}
document.write('<br>')
document.write(sum)