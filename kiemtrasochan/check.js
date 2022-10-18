function display() {
    let n = document.getElementById('number').value
    checkEven(n)
}
function checkEven(a) {
    if (a % 2 == 0) {
        document.getElementById('kq').innerHTML = a + ' la so chan'
    } else
        document.getElementById('kq').innerHTML = a + ' khong la so chan'
}