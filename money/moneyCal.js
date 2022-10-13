function Cal(){
    let input = +document.getElementById('send').value
    let bo = +document.getElementById('bonus').value
    let y = +document.getElementById('year').value
    let bonusValue = bo / 100
    let firstYear = input * bonusValue
    let moreYear = firstYear * y + input
    if(y > 1){
        document.getElementById('kq').innerHTML = "Lãi suất ngân hàng: " + moreYear
    }else
    document.getElementById('kq').innerHTML = "Lãi suất ngân hàng: " + firstYear
}