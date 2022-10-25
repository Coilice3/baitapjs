function isPrime(n){
    let result = true
    if(n < 2){
        result = false
    }else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                result = false
                break
            }
        }
        return result
    }
}
let number = 20
for(let i = 0; i <= number; i++){
    let c = isPrime(i)
    if(c){
        document.write(' ' + i)
    }
}
