function soma(n1,n2){
    return n1+n2
}
alert("Sem Currying");
alert(soma(2,3));
alert(soma(2,4));
alert(soma(2,5));
alert(soma(2,6));

//como fica:

function somacurrying(n1){
    return function(n2){
        return n1+n2
    }
}

const soma2 = somacurrying(2)

alert("Com Currying");
alert(soma2(3));
alert(soma2(4));
alert(soma2(5));
alert(soma2(6));