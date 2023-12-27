// Pertama, kita deklarasikan terlebih dahulu nilai dari sebuah array yang ingin diubah
var array = [9, 0, 4, 0, 1, 4, 2, 6, 0, 5, 7, 0, 1, 0];

// Cara saya menyelesaikan masalah satu ini adalah dengan memisahkan nilai dari array ke dalam dua buah array baru

// Jadi, pertama kita deklarasikan variabel array baru dengan nama newArray untuk menyimpan nilai array yang bukan nol
var newArray = [];

// Lalu untuk array baru kedua untuk menyimpan nilai dari array yang sama dengan nol
var nullArray = [];

// Dilanjutkan dengan looping terhadap nilai yang terdapat di dalam variabel array
for(let i = 0; i < array.length; i++){
    // Kondisi pertama jika nilai array tidak sama dengan nol maka akan ditambah ke variabel newArray
    if(array[i] != 0){
        newArray.push(array[i]);
    // Kondisi berlawanan akan menambahkan nilai array ke variabel nullArray
    } else {
        nullArray.push(array[i]);
    }
}

// Telah diketahui jika kita memiliki dua variabel array baru yang masing-masingnya telah memiliki nilai

// Selanjutnya adalah proses menggabungkan nilai dari kedua array
// Pertama, kita lakukan proses looping terhadap variabel nullArray
for(let j = 0; j < nullArray.length; j++){
    // Lalu tiap nilai yang ada di dalam nullArray akan di-push ke dalam variabel newArray
    newArray.push(nullArray[j]);
}

console.log(newArray);