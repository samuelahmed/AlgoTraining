const mostWordsFound = (sentence) => {
    let max = 0;
    let temp = 0;

    for(let i=0; i < sentence.length; i++){
        temp = sentence[i].split(" ").length;
        if(temp>max){
            max = temp;
        }
    }
    return max;
}