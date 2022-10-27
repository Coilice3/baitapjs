let n = 100
let count = 0, sum = 0
for(let i = 0; i <= n; i++){
    if(i % 7 == 0){
        count++
        if(count <= 30){
            sum += i
        }
    }
}
document.write(sum)