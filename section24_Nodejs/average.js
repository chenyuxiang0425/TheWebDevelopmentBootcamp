function average(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return Math.round(sum/scores.length);
}



let scores1 = [90,91,94,100,94,100,95];
let scores2 = [53,64,51,53,64,54,64,53];
console.log(average(scores1));
console.log(average(scores2));

