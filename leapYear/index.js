let year = prompt("What year is it?");
function  isLeap(year){
    if (year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year.";
            } else {
                return "Not Leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

alert(isLeap(year));

// Challenge di atas adalah membuat sebuah pengujian apakah tahun yang diinput merupakan tahun kabisat atau bukan.
// Ada banyak kondisi yang harus dipenuhi, sehingga pembuatan flowchart akan sangat membantu.
// Setelah flowchart telah selesai dibuat, maka harus diterjemahkan ke dalam kode.