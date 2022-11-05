let n = +prompt('Nhap 1 so bat ki:')
while (n < 0) {
    n = +prompt('Nhap lai:')
}
document.write(sumOfListPrime(n))

function isPrime(n) {
    let result = true
    if (n < 2) {
        result = false
    } else
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                result = false
                break
            }
        }
    return result
}
function sumOfListPrime(n) {
    let sum = 0
    for(let i = 0; i <= n; i++){
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum
}
