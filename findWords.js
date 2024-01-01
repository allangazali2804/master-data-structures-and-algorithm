const words = ["leet","code"];

const x = "e";
let index = []; 

var findWordsContaining = function(words, x) {
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            index.push(i);
        }
    }

    return index;
};

console.log(findWordsContaining(words, x));

//console.log(words[0].split(''));
