function fn(){
    alerta("Hoisting de Funcao");
    
    function alerta(val){
        alert(val);
    }
    
}

fn();

/**
function fn(){
    function alerta(val){
        alert(val);
    }
    alert("Hoisting de Funcao");

}
fn();
 */