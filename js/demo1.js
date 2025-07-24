
for (var i = 0; i < 10; i++) {
    console.log("i="+i); // In ra cac so tu 0 den 9
}
var arr =[]; //day la 1 array
arr.push(9);//0
arr.push(12);//1
arr.push(182);//2
for (var i = 0; i < arr.length; i++) {
    console.log("arr["+i+"]="+arr[i]); // In ra cac phan tu trong array
}
//duyet mang --map
arr.map(e=> {
    console.log("map: "+e); // In ra cac phan tu trong array su dung map
}
)
arr.sort((a, b) => a - b); // Sap xep mang
if(arr.includes(12)) {
    console.log("Mang co chua 12"); // Kiem tra xem mang co chua 12
}
var pi = '3.14';
pi = parseFloat(pi); // Chuyen chuoi sang so thuc
console.log("pi="+pi); // In ra gia tri cua pi
pi = parseInt(pi); // Chuyen chuoi sang so nguyen
console.log("pi="+pi); // In ra gia tri cua pi
function add(a, b) {
    return a + b; // Ham cong hai so
}
const phep_tru = function(a, b) {
    return a - b; // Ham tru hai so
}
// // Hien thi thong bao tong hai so - Ham nay return void
// // alert("Tong 2 so 3 va 5 la: " + add(3, 5)); 
// if (confirm("Ban co muon tiep tuc khong?")){
//     alert("Ban da chon tiep tuc"); // Hien thi thong bao neu nguoi dung chon tiep tuc
// } else{
//     alert("Ban da chon khong tiep tuc");
// }
