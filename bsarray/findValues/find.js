let arr = [3, 5, 2, 6, 7, 9]
let n = +prompt('Nhap n: ')
for(let i = 0; i < arr.length; i++){
    if(n == arr[i]){
        alert('So ' + arr[i] + ' duoc tim thay o vi tri ' + i)          
    }
}