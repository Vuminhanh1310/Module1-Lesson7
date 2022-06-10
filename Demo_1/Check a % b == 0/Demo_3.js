function cal() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = a % b;
    console.log(c);
    if ( c == 0){
        alert(" a chia hết cho b");
    }else{
        alert("a không chia hết cho b");
    }





}