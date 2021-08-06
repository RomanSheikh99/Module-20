var a = 5, b = 7;
console.log(a,b);

var tempu = a;
a = b;
b = tempu;
console.log(a,b);

// destructuring
var fName = "Sheikh", lName = "Roman";
console.log(fName,lName);

[fName,lName] = [lName,fName];
console.log(fName,lName);