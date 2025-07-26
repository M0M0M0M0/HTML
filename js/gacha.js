var x = prompt("Nhap so nguyen tu 0 den 99: "); 
var money = prompt("Nhap so tien: ");
var r = Math.random(); // Lay so ngau nhien tu 0 den 1
r = r*100;
r= parseInt(r); // Chuyen so ngau nhien sang so nguyen
if (x == r) {
    alert("Chuc mung ban da doan dung so va nhan duoc " + money*70 + " dong");
}else{
    alert("Ban da doan sai so va mat " + money + " dong");
}
