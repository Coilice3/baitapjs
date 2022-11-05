let arr = [4, 6, 4, 2, 7, 1]
let index = 0
let max = arr[0]
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        index = i        
    }
}
alert('So ' + max + ' lon nhat va o vi tri thu ' + index)