// recursive function


function recursive(num){
    if(num == 1){
        return num;
    }else{
    return recursive(num - 1);
    }
}

console.log(recursive(6));


function fibonacci(num){
    let febo = [0,1];
    febo = fibonacci(num -1);
    febo[i]= febo[i-1] + febo[i-2];
      
    return febo;
   
}

console.log(fibonacci(5));