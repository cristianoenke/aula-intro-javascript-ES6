// OOP
function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Cristiano');

console.log(p)


// Retorno Explícito
// OOP
function Pessoa2(name) {
    this.name = name;
    return {
        name: 'Outro Nome'
    }
}

const p2 = new Pessoa2('Cristiano');

console.log(p2)


// Prototype
function Cachorro(){}
Cachorro.prototype.latir = function(){}

const c = new Cachorro()
console.log(c.__proto__)

Cachorro.prototype.woof = function(){}
console.log(c.__proto__)
