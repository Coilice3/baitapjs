let n = +prompt('Nhap tong so muon in: ')
let a = 0, b = 1, temp
while(n > 0){
    temp = a;
    a = a + b;
    b = temp;
    document.write(a + ' ');
    n--;   
}