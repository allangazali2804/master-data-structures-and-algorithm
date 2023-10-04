var angka1 = prompt("Masukkan angka 1!");
var angka2 = prompt("Masukkan angka 2!");
var angka3 = prompt("Masukkan angka 3!");

var angkaMaks = "";

if(angka1 > angka2){
    if(angka1 > angka3){
        angkaMaks += angka1;
    } else {
        angkaMaks += angka3;
    }
} else if(angka2 > angka3){
    angkaMaks += angka2;
} else {
    angkaMaks += angka3;
}

console.log(angkaMaks);