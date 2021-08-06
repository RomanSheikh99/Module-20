// create a Fibonacci math 

function fibonacci(num){
    let febo = [0,1];
    if(typeof num != "number" || num < 1){
        return " Your Input is Error....\n Please Enter A Valid Number "
    }else{
        for(let i = 2; i <=num; i++){
            febo[i]= febo[i-1] + febo[i-2];
        }
        return febo;
    }
}

console.log(fibonacci(4500));