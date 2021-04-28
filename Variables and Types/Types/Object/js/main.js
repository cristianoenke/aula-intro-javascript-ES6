let user = {
    name: 'Cristiano'
};
console.log("Original Variable: ", user)

// Alterando as propriedades de um objeto
user.name = "Cristiano Enke"
console.log("First Modification: ", user)
user['name'] = "Enke, Cristiano"
console.log("Second Modification ", user)


// Adicionando uma propriedade
user.name = "Cristiano";
user.lastName = "Enke";
console.log("Property Added: ", user);

// Removendo uma propriedade
delete user.lastName;
console.log("Property Deleted: ", user);



// Funções de Objetos
let users = {
    name: 'Cristiano',
    lastname: 'Enke'
};

// Chaves do Objeto
console.log("Object keys: ", Object.keys(users))

// Valores das Chaves do Objeto
console.log("Object keys values: ", Object.values(users))

// Array contendo as keys e values
console.log("Array with keys and values: ", Object.entries(users))

// Adiciona Propriedade ao Objeto
Object.assign(users, {fullName:"Cristiano Enke"})
console.log("Objeto com Nova Propriedade: ", users)


// Previnindo todas alterações do Objeto
const newObj ={foo:'bar'};
console.log("Original Object: ", newObj)
Object.freeze(newObj);
newObj.foo = 'changed bar';
delete newObj.foo;
newObj.bar = 'foo';
console.log("After trying to modify: ", newObj)


// Previnindo criaçao de propriedades novas, mas permitindo modificação de propriedades existentes no Objeto
const person ={name:'Cristiano'};
console.log("Original Object: ", person);
Object.seal(person);
person.age = '28';
person.name = 'Cristiano Enke';
console.log("After trying to modify: ", person)


