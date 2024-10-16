function sortWord(word){
    let ans = '';
    ans = word.split('').sort().join('');
    return ans;
}

let ans = sortWord("kasdhl");
console.log(ans);