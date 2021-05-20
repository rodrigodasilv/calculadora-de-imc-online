function focusOnElement(where){
    var elmnt = document.getElementById(where);
    elmnt.scrollIntoView(); 
}

function addClasses(){
    element.classList.add("bold");
    element.classList.add("uppercase");
}

let pessoa = {
    peso: this.peso, 
    altura: this.altura,  
    imc: this.imc,
    calcIMC :  function() {
        this.peso = document.getElementById("peso").value;
        this.altura = document.getElementById("altura").value;

        if(this.peso=="" || this.altura=="" || this.peso==0 || this.altura==0){
            M.toast({html: 'Um (os ambos) os campos não foram preenchidos corretamente!'});
        }else{
            this.imc = this.peso / (this.altura*this.altura);
            this.imc = this.imc.toFixed(2);
            M.toast({html: 'Seu IMC é '+ this.imc});
            
            for (itemDaLista=0; itemDaLista < 4; ) {
                element = document.getElementById(itemDaLista);
                element.classList.remove("bold");
                element.classList.remove("uppercase");
                itemDaLista++;
            } 

            if(this.imc<=18.49){
                element = document.getElementById("0");
                addClasses();
            }else if(this.imc>=18.5 && this.imc<=24.99){
                element = document.getElementById("1");
                addClasses();
            }else if(this.imc>=25 && this.imc<=29.9){
                element = document.getElementById("2");
                addClasses();
            }else if(this.imc>=30 && this.imc<=39.99){
                element = document.getElementById("3");
                addClasses();
            }else if(this.imc>39.99){
                element = document.getElementById("4");
                addClasses();
            }
            // Muda o foco para a tabela
            focusOnElement('results');
    }
}
}
