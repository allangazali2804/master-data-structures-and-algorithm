var nilaiUAS = [90, 85, 70, 65, 50, 90, 100];
var predikatNilai = [];

for(let i = 0; i < nilaiUAS.length; i++){
    if(nilaiUAS[i] >= 90){
        predikatNilai.push("A");
    } else if(nilaiUAS[i] >= 80){
        predikatNilai.push("B");
    } else if(nilaiUAS[i] >= 70){
        predikatNilai.push("C");
    } else if(nilaiUAS[i] >= 60){
        predikatNilai.push("D");
    }  else {
        predikatNilai.push("E");
    }
}

console.log(predikatNilai);