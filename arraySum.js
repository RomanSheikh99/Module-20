// how to sum all array Element

// way 1 using for loop

var myArray = [345, 345,345,35,3456,3465,36,35,36,36,36];

let sum = 0;
for(let i = 0; i<myArray.length; i++){
    let element = myArray[i];
    sum = sum + element;
}
console.log(sum);

// way 2 using function and way to find largest and smallest array element

function arraySum(numbers){
    let sum = 0;
    let highFess = numbers[0];
    let smallFess = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
        if(highFess < element){
            highFess = element;
        }
        if(smallFess > element){
            smallFess = element;
        }
    }
    let result =("total Fess diyesen = "+ numbers.length +" jon\n"+"total fess is = " + sum + " taka\n"+"highest fess is = " + highFess + " taka\n" + "smallest fess is = " + smallFess + " taka");
    return result;    
}
const picnicFees = [242,234,245,275,235,386,345,334,364,235,345,265];
let totalFess = arraySum(picnicFees);
console.log(totalFess);
