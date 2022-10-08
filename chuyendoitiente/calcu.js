function conVert(){
    let a = +document.getElementById('inputValue').value
    let fromCurrency = document.getElementById('fromCurren').value
    let toCurrency = document.getElementById('toCurren').value
    let kq = 0
    if(fromCurrency == 'vn1'){
        if(toCurrency == 'vn2'){
            kq = a;
        }else if(toCurrency == 'usa2')
            kq = a / 23000;
    }else if(fromCurrency == 'usa1'){
        if(toCurrency == 'vn2'){
            kq = a * 23000;
        }else if(toCurrency == 'usa2')
            kq = a;
    }
    if(toCurrency == 'vn2'){
        document.getElementById('kq').innerHTML = kq + ' VND';
    }else if(toCurrency == 'usa2')
        document.getElementById('kq').innerHTML = kq + ' USD';
}
