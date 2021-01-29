let totalSystemChecks = 16
let pointsToPass = 25
let currentPoints = parseInt(prompt("What is the total of your current points?"))
let systemChecksCompleted = parseInt(prompt("How many system checks have you completed?"))

let needToPass = (pointsToPass - currentPoints)
console.log("Needed to pass", needToPass)
let systemChecksRemaining = (totalSystemChecks - systemChecksCompleted)
console.log("System checks remaining", systemChecksRemaining)

let arrayMostlyOnes = [1, 2, 3]
let arrayMostlyTwos = [2, 1, 3]
let arrayMostlyThrees = [3, 2, 1]

function combine(array, sum) {
    function c(left, right, sum) {
        if (!sum) {
            result = right;
            return true;
        }
        return left.some(function (a, i, aa) {
            return a <= sum && c(aa.slice(i + (a > sum - a)), right.concat(a), sum - a);
        });
    }
    var result = [];
    c(array.sort(function (a, b) { return b - a; }), [], sum);
    return result;
}
function makeOutputs(needToPass, array) {
    return combine(array, needToPass);   
}
if (makeOutputs(needToPass, arrayMostlyThrees).length <= systemChecksRemaining) {
    console.log("Mostly threes: " + makeOutputs(needToPass, arrayMostlyThrees))
}
if (makeOutputs(needToPass, arrayMostlyTwos).length <= systemChecksRemaining) {
    console.log("Mostly twos: " +makeOutputs(needToPass, arrayMostlyTwos))
}
if (makeOutputs(needToPass, arrayMostlyOnes).length <= systemChecksRemaining) {
    console.log("Mostly ones: " + makeOutputs(needToPass, arrayMostlyOnes))
}

//how to write a function to display 
//Exceeds : number of times 3 appears in index,
//Meets : number of times 2 appears in index,
//Retake : number of times 1 appears in index

//list all combinations?