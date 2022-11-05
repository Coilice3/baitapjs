let x = 0;
let arr = []
function addElement(){  
    arr[x] = document.getElementById('ipText').value 
    alert('The value is in the ' + x + ' position')
    x++
}

function displayElement(){
    let e = "<hr/>";
    for (let i = 0; i < arr.length; i++) {
        e += "Element " + i + " = " + arr[i] + "<br/>";
    }
    document.getElementById("kq").innerHTML = e;
}