// Conditional If
const array = [0, 1, 2, 3, 4, 5, 7, 9, 11, 13];

array.forEach(item =>{
    if (item % 2 === 0){ 
        console.log("O número: ", item, " é divisível por 2")
    } 
    else if (item % 3 === 0){
        console.log("O número: ", item, " é divisível por 3")
    }
    else if (item % 5 === 0){
        console.log("O número: ", item, " é divisível por 5")
    }
    else {
        console.log("O número: ", item, " não é divisivel por 2,3 ou 5")
    }
})


// Conditional Switch
const vegetal = 'Batata';

switch(vegetal) {
    case 'Pepino':
        console.log('3.0 R$/kg');
        break;
    case 'Batata':
    case 'Tomate':
        console.log('7.0 R$/kg');
        break;
    default:
        console.log('Vegetal Inexistente');
        break;
}