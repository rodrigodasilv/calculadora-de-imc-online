function focusOnElement(where){
    var elmnt = document.getElementById(where);
    elmnt.scrollIntoView(); 
}

function calcIMC(){
    var peso = document.getElementById("peso").value;
    var tamanho = document.getElementById("tamanho").value;
    var element = "";
    console.log(tamanho);
    console.log(peso);

    if(peso=="" || tamanho=="" || peso==0 || tamanho==0){
        M.toast({html: 'Um (ou ambos) campo(s) não foram preenchido(s) corretamente!'});
    }else{
        var imc = peso / (tamanho*tamanho);
        var imc = imc.toFixed(2);
        M.toast({html: 'Seu IMC é '+ imc});

        // Tira o bold do IMC selecionado antes
        var itemDaLista = 0;
        for (; itemDaLista < 4; ) {
            element = document.getElementById(itemDaLista);
            element.classList.remove("bold");
            element.classList.remove("uppercase");
            itemDaLista++;
        } 

        // Função para adicionar as classes
        function addClasses(){
            element.classList.add("bold");
            element.classList.add("uppercase");
        }

        // Adiciona as classes na categoria que o IMC se encaixa
        if(imc<=18.49){
            element = document.getElementById("0");
            addClasses();
        }else if(imc>=18.5 && imc<=24.99){
            element = document.getElementById("1");
            addClasses();
        }else if(imc>=25 && imc<=29.9){
            element = document.getElementById("2");
            addClasses();
        }else if(imc>=30 && imc<=39.99){
            element = document.getElementById("3");
            addClasses();
        }else if(imc>39.99){
            element = document.getElementById("4");
            addClasses();
        }
        // Muda o foco para a tabela
        focusOnElement('results');
    }
}