var mostWordsFound = function(sentences) {
    let max = 0;
    let temp = 0;
    for (let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length; //array method .split()
        if (temp > max) {
            max = temp;
        }
    }
    
    return max;
};
