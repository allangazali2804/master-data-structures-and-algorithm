/*
While loop dapat diawali dengan:

a) deklarasi variable
let variable = 0;

b) deklarasi variabel number
let number = 100

number juga bisa diketik langsung di dalam perintah while di bawah tanpa harus dideklarasikan terlebih dahulu.

c) pembuatan conditional while loop meningkat: misal variable = 0, number = 100, maka akan tercetak nilai 1-99
while(variable < number) {
    variable++;
    console.log(variable);
}

d) pembuatan conditional while loop menurun:
while(variable > number) {
    variable--;
    console.log(variable);
}

e) Ingat, JavaScript merupakan bahasa waterfall sehingga yang berada di atas akan dijalankan terlebih dahulu, berbeda dengan
CSS yang semakin ke bawah, itulah yang dijalankan. Jadi, misal variable = 0, number = 100:

while(variable < number) {
    variable++;
    console.log(variable);
}

while(variable < number) {
    console.log(variable);
    variable++;
}

Akan memberikan hasil yang berbeda, yang pertama akan dimulai dari angka 1, sedangkan yang kedua akan dimulai dari angka
0.
*/


function fizzBuzzWhile() {
    let output = [];
    let input = prompt("How many numbers are there?");
    let count = 1
    while (count <= input){
    
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    } else if (count % 3 === 0){
        output.push("Fizz")
    } else if (count % 5 === 0){
        output.push("Buzz")
    } else {
        output.push(count);
    }

    count++;
    }
    console.log(output);
}


function fizzBuzzFor() {
    let output = [];
    let input = prompt("How many numbers are there?");
    for(let count = 1; count <= input ; count++){
        if(count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz")
        } else if (count % 3 === 0){
            output.push("Fizz")
        } else if (count % 5 === 0){
            output.push("Buzz")
        } else {
            output.push(count);
        }
    }
    console.log(output);
}

/* 
Alasan mengapa conditional dapat dibagi 3 dan dapat dibagi 5 berada di atas adalah karena jika conditional
dapat dibagi 3 berada di atasnya, apabila mencapai angka 15, 15 itu dapat dibagi 3, karena sistem penjalanan
kode adalah dengan konsep waterfall, alih-alih menjalankan FizzBuzz, yang keluar adalah Fizz.
*/