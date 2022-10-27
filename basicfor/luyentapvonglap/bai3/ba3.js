let a = 0, b = 1, n = 20
let tp 
while (n){  
    tp = a
    a = a + b
    b = tp
    document.write(a + ' ');
    n--
}