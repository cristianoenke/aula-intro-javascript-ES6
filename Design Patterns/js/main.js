// Design Patterns - Factory
function Pessoa(customProp) {
    return {
        name: 'Cristiano',
        lastname: 'Enke',
        ...customProp
    }
}

const p = Pessoa({age:'Cenke'});
console.log(p)

// Design Patterns - Singleton
function Pessoa2() {
    if (!Pessoa2.instance){
        Pessoa2.instance = this;
    }
    return Pessoa2.instance
}

const p2 = Pessoa2.call({name:'Cristiano'});
const p3 = Pessoa2.call({name:'Enke'})
console.log(p2)
console.log(p3)

// Design Patterns - Decorator

let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn()
}

function sum(a,b){
    return a+b;
}

console.log(callIfAuthenticated(() => sum(2,3)))
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2,3)))

// Design Patterns - Observer

class Observable {
    constructor() {
        this.observables = [];
    }
    subscribe(fn2) {
        this.observables.push(fn2);
    }
    notify(data){
        this.observables.forEach(fn2 => fn2(data));
    }
    unsubscribe(fn2){
        this.observables = this.observables.filter(obs => obs !== fn2)
    }
}

const o = new Observable ();
const logData1 = data => console.log('Subscribe 1: ', data)
const logData2 = data => console.log('Subscribe 2: ', data)
const logData3 = data => console.log('Subscribe 3: ', data)

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('Notified 1')

o.unsubscribe(logData2)

o.notify('Notified 2')
