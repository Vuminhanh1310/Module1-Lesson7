function cal_B1() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    let tb = (a + b + c)/3;
    document.getElementById('result-B1').innerHTML = " Kết quả: Điểm trung bình học tập là " + tb;



}