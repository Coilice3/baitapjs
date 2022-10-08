function tinhNam(){
    let input = +document.getElementById('year').value
    let can = +document.getElementById('year').value % 10
    let chi = +document.getElementById('year').value % 12
    let front, back
    if(can == 0){
        front = 'Canh'
    }else if(can == 1){
        front = 'Tân'
    }else if(can == 2){
        front = 'Nhâm'
    }else if(can == 3){
        front = 'Quý'
    }else if(can == 4){
        front = 'Giáp'
    }else if(can == 5){
        front = 'Ất'
    }else if(can == 6){
        front = 'Bính'
    }else if(can == 7){
        front = 'Đinh'
    }else if(can == 8){
        front = 'Mậu'
    }else if(can == 9){
        front = 'Kỷ'
    }


    //tinh Chi
    if(chi == 0){
        back = 'Thân'
    }else if(chi == 1){
        back = 'Dậu'
    }else if(chi == 2){
        back = 'Tuất'
    }else if(chi == 3){
        back = 'Hợi'
    }else if(chi == 4){
        back = 'Tý'
    }else if(chi == 5){
        back = 'Sửu'
    }else if(chi == 6){
        back = 'Dần'
    }else if(chi == 7){
        back = 'Mẹo'
    }else if(chi == 8){
        back = 'Thìn'
    }else if(chi == 9){
        back = 'Tỵ'
    }    

    document.getElementById('kq').innerHTML = front + " " + back
}