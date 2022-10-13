function calcula(){
    let r = +document.getElementById('r').value, pi = 3.14
    let cv = 2 * r * pi
    let dt = pi * r * r
    document.getElementById('CV').innerHTML = 'Chu vi là: ' + cv;
    document.getElementById('DT').innerHTML = 'Diện tích là: ' + dt;
}