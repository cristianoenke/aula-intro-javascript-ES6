// For
const array = [0, 1, 2, 3, 4, 5, 7, 9, 11, 13];

for (let index = 0; index < array.length; index++){
    const value = array[index];
    console.log("Elemento: ", index)
    console.log(" Valor: ", value)
}       
  
// While
var n = 0;
var x = 0;
while (n < 5){
    n++;
    x +=n
    console.log('n = ', n, 'x = ', x)
}


// Do...While
let i = 0;
do {
    i +=1;
    console.log('i = ', i)
} while (i < 5)


// For in, For of
let arr = [3,6,4];
arr.foo = 'Hello';

for (let i in arr) {
    console.log('in ', i)
}
for (let i of arr) {
    console.log('of ', i)
}