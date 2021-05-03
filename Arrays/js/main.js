// Arrays
// Formas de criar arrays
const arr = [1,2,3];
console.log(arr);

const arr2 = new Array(4,5,6);
console.log(arr2);

const arr3 = Array.of(7,8,9,'a');
console.log(arr3);

const arr4 = Array(3); // Array vazio
console.log(arr4);

const arr5 = Array(4,3);
console.log(arr5);

//Array a partir de um objeto array-like
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
console.log(divs);

// Inserindo elementos no fim do array 
const vegetais = ['tomate', 'batata'];
vegetais.push('pepino');
console.log(vegetais);


// Removendo elementos no fim do array
const vegetais2 = ['tomate', 'batata','cebola'];
console.log(vegetais2);
vegetais2.pop();
console.log(vegetais2);


// Inserindo elementos no inicio do array 
vegetais.unshift('pepino');
console.log(vegetais);

// Removendo elementos no inicio do array 
vegetais2.shift();
console.log(vegetais2);

// Concatenando dois arrays e retornando um novo
const vegetais3 = vegetais.concat(vegetais2);
console.log(vegetais3);

// 'Fatiando' um array 
const arr6 = [1,1,2,3,5,8,13,21];
console.log(arr6.slice(2,6))


// Alterando um array, removendo e adicionando elementos
const arr7 = [1,2,3,4,5];
arr7.splice(2);
console.log(arr7);
arr7.splice(0,0,'first')
console.log(arr7);


// Iterando elementos de um array
const arr8 = [1,3,5,2,4];
arr8.forEach((value, index) => {
    console.log(`${index}, ${value}`)
});

// Iterando elementos de um array e retornando um novo array
console.log(arr8.map(value => value*2))

// Retornando novo array de forma recursiva
const arr9 = [1,2,3,[4,5,6,[7,8,9]]];
console.log(arr9);
console.log(arr9.flat());
console.log(arr9.flat(2));

// Retornando novo array com map e fazendo um flat
console.log(arr8.flatMap(value => [value*2]));

// Retornando as chaves de um array em um array iterator
console.log(arr8.keys().next());

// Retornando os pares chaves-valor em um array iterator
console.log(arr8.entries().next());


// Buscando um elemento do array que satisfaz uma condição
console.log(arr8.find(value => value>3));

// Buscando index de um elemento do array que satisfaz uma condição
console.log(arr8.findIndex(value => value>3));

// Buscando todos os elementos do array que satisfaz uma condição
console.log(arr8.filter(value => value>3));

// Index do primeiro elemento que pode ser encontrado no array
console.log(arr8.indexOf(3));

// Index do ultimo elemento que pode ser encontrado no array
console.log(arr8.lastIndexOf(3));

// Verificar se determinado elemento está presente no array
console.log(arr8.includes(3));

// Verificar se algum elemento no array satisfaz condição
console.log(arr8.some(value => value > 7));

// Verificar se todos os elementos no array satisfazem condição
console.log(arr8.every(value => value < 7));

// Ordenando elementos do array
console.log(arr8.sort());

// Invertendo elementos do array
console.log(arr8.reverse());


// Iterando cada elemento do array
console.log(arr8.reduce((total, value) => total +=value,0));