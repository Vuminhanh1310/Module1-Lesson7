function cal() {
    let a = +document.getElementById('a').value;

    let c = 2 * 3.14 * a;

    let C = c.toFixed(2);

    let s = 3.14 * a * a

    let S = s.toFixed(2);

    document.getElementById('result').innerHTML = " Kết quả: Chu vi hình tròn là" + C +
        "<br> <br>" + " Diện tích hình tròn là " + S ;





}