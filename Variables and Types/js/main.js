/**
var nameVar = 'Tomate';
let nameLet = 'Pepino';
const nameConst = 'Cebola';

console.log(nameVar);
console.log(nameLet);
console.log(nameConst);
*/


// Exemplo var 
var test = 'Exemplo Fora';
(() => {
    console.log(`Valor na Função: "${test}"`);
    if(true){
        var test = 'Exemplo If';
        console.log(`Valor no If: "${test}"`);
    }
    console.log(`Valor Após a Execução do If: "${test}"`);
})();



// Exemplo let 
(() => {
    let test = 'Valor Função';
    console.log(`Valor na Função: "${test}"`);
    if(true){
        let test = 'Valor If';
        console.log(`Valor no Primeiro If: "${test}"`);
    }
    if(true){
        let test = 'Valor Segundo If';
        console.log(`Valor no Segundo If: "${test}"`);
    }
    console.log(`Valor Após a Execução do If: "${test}"`);
})();


// Exemplo const 
(() => {
    const test = 'Valor Função';
    console.log(`Valor na Função: "${test}"`);
    if(true){
        const test = 'Valor If';
        console.log(`Valor no If: "${test}"`);
    }
    
    console.log(`Valor Após a Execução do If: "${test}"`);
})();
