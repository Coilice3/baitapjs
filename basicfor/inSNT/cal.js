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
let count = 0
for(let i = 0; i <= 100; i++){
    let c = isPrime(i)
    if(c){
        count++
        if(count <= 20){
            document.write(' ' + i)
        }
    }
}


    
