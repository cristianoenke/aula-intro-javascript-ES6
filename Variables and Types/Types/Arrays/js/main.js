// Arrays
const users = ['Tina','Tony','Tuna'];

const gender = {
    Man: Symbol('M'),
    Woman: Symbol('W')
}

const colors = {
    Red: Symbol('R'),
    Yellow: Symbol('Y'),
    Brown: Symbol('B')
}

const vegetables = [
    {
        name: 'Tomato',
        color: colors.Red,
        units: 2
    },
    {
        name: 'Corn',
        color: colors.Yellow,
        units: 4
    },
    {
        name: 'Potato',
        color: colors.Brown,
        units: 1
    },
    {
        name: 'Apple',
        color: colors.Red,
        units: 8
    }
]

// Quantidade de Itens do Array
console.log('Items: ', vegetables.length);

// Verificar se é Array
console.log('É Array: ', Array.isArray(vegetables));

// Iterar os Itens do Array
vegetables.forEach(vegetable => {
    console.log('Vegetable: ', vegetable.name);
})

// Filtrar Itens do Array
const reds = vegetables.filter(vegetable => vegetable.color === colors.Red);
console.log('Red Vegetables: ', reds);

// Retornar um novo
const Vegs = vegetables.map(vegetable => {
    vegetable.isvegs = 'This is a vegetable';
    return vegetable
})
console.log("Novo Array com nova propriedade: ", Vegs)


// Transformar o array em outro tipo
const TotalUnits = vegetables.reduce((units, vegetable) => {
    units += vegetable.units;
    return units
}, 0)
console.log("Total Units: ", TotalUnits)

// Juntando operações
const totalEvenUnits = vegetables
                    .filter(vegetable => vegetable.units % 2 === 0)
                    .reduce((units, vegetable) => {
                        units += vegetable.units
                        return units
                    }, 0)

console.log("Total Units of Vegetables with Even Units: ", totalEvenUnits)