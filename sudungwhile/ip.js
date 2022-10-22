function b1(){
    let a = +prompt('Nhap so: ')
    let b
    while(a != -1){
        alert(a)
        b = +prompt('Nhap so: ')
        a += b
    }
    a = null
}

function b2(){
    let i = 1
    while(i <= 100){
        document.write("<hr width = " + i + "%>");
        i++
    }
}