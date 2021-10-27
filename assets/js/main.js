class pessoa{
    constructor(peso,altura){
        this.peso = peso; 
        this.altura = altura;       
    }
    get imc() {
        return this.calcIMC()
    }
    calcIMC() {
        return (this.peso / (this.altura*this.altura)).toFixed(2);
    }
}

function focusOnElement(where){
    var elmnt = document.getElementById(where);
    elmnt.scrollIntoView(); 
}

function addClasses(elemento){
    elemento.classList.add("bold");
    elemento.classList.add("uppercase");
}

function verif_user(user){
    if(user.peso=="" || user.altura=="" || user.peso<=0 || user.altura<=0){
        M.toast({html: 'Um (os ambos) os campos não foram preenchidos corretamente!'});
        return false;
    }else{
        return true;
    }
}

function remove_classes(){
    for (itemDaLista=0; itemDaLista < 4; itemDaLista++) {
        element = document.getElementById(itemDaLista);
        element.classList.remove("bold");
        element.classList.remove("uppercase");
    }
}

function show_results(user){
    M.toast({html: 'Seu IMC é '+ user.imc});
    remove_classes();
    if(user.imc<=18.49){
        elemento = document.getElementById("1");
    }else if(user.imc>=18.5 && user.imc<=24.99){
        elemento = document.getElementById("2");
    }else if(user.imc>=25 && user.imc<=29.9){
        elemento = document.getElementById("3");
    }else if(user.imc>=30 && user.imc<=39.99){
        elemento = document.getElementById("4");
    }else if(user.imc>39.99){
        elemento = document.getElementById("5");
    }
    addClasses(elemento);
    // Muda o foco para a tabela
    focusOnElement('results');
}

function start(){
    let user = new pessoa(
        document.getElementById("peso").value,
        document.getElementById("altura").value
    );
    if (verif_user(user)){
        show_results(user);
    }
}
