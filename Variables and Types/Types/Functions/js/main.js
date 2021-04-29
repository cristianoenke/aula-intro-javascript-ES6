// Funções
function fn(){
    return 'Code Here';
}

const ArrowFn = () => 'Code Here';
const ArrowFn2 = () => {
    return 'Code Here';
}

// Funcoes são objetos
fn.prop = 'Propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logVal = value => console.log(value);
const logFnRes = fnParam => console.log(fnParam())

logFnRes(fn);

// Receber e retornar funções
const contrlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExec = contrlFnExec(fn);

handleFnExec(true);
handleFnExec();


this.name = 'Nome no contexto de criação'
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: "Nome no objeto de execução",
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName())