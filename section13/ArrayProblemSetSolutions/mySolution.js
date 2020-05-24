console.log("CONNECTED");

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0 ; i--) {
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4])
//*** isUniform() ***

function isUniform(arr) {
    let firstItem = arr[0];
    let boolean = true;
    arr.forEach(function (element) {
        if (element !== firstItem) {
            boolean = false;
        }
    })
    return boolean;
}

function sumArray(arr){
    let total = 0;
    arr.forEach(function(element){total+=element});
    return total;
}

function max(arr){
    let max = Number.MIN_VALUE;
    arr.forEach(function (element) {
        if (element > max) {
            max = element;
        }
    })
    return max;
}

console.log("isUniform in [1,2,3,4]: " + isUniform([1,2,3,4]));
console.log("isUniform in [1,1,1,1]: " + isUniform([1,1,1,1]));

console.log("sumArray in [1,2,3,4]: " + sumArray([1,2,3,4]));
console.log("sumArray in [1,1,1,1]: " + sumArray([1,1,1,1]));

console.log("max in [1,2,3,4]: " + max([1,2,3,4]));
console.log("max in [1,1,1,1]: " + max([1,1,1,1]));
