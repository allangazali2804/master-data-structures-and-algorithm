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
