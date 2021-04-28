const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são unicos
console.log("Simbols are equal: ", symbol1===symbol2)


// Previnindo Conflitos Entre Nomes de Propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: "Cristiano",
    [nameSymbol2]: "Enke",
    fullname: "Cristiano Enke"
}

console.log("User with Symbols: ", user)

// Symbols Criam Propriedades não enumeráveis
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log(`Chaves e Valores do Objeto: ${key}: ${user[key]}`)
    }
}

// Exibindo as chaves e valors dos Symbols no Objeto
console.log("Chaves e Valores do Objeto: ", Object.getOwnPropertySymbols(user))

// Criar um Enum

const directions = {
    UP : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
}