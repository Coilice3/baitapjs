let a = 0, b = 1, tp
while(a <= 20){
    tp = a
    a = a + b
    b = tp
    if(a % 5 == 0){
        document.write(a)
        break
    }
}