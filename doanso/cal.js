function plaY() {
    let flexible = +prompt('Bạn muốn đoán trong khoảng nào(1 số bất kỳ: ')
    let guessVal = +prompt('Số mà bạn đoán: ')
    let n = Math.floor(Math.random() * flexible) + 4;
    if (guessVal == n) {
        alert('Chuc mung')
    } else
        alert('Sai mat roi')
}