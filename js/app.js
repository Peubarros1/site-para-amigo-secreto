let listadeamigos = [];

function adicionar() {
    let input = document.getElementById("nome-amigo").value;
    let numero = 1;
    if (listadeamigos.includes(input)) {
        numero = 0; // Se já tiver alguém com esse nome, ele não é adicionado à lista;
    }
    if (numero) {
        listadeamigos.push(input);
    }
    document.getElementById("lista-amigos").textContent = listadeamigos.join(', ');
    document.getElementById("nome-amigo").value = '';
}

let listasortear = [];

function sortear() {
    let tam = listadeamigos.length;
    let i;
    let numeros;


    if (tam <= 0){
        alert("não temos os amigos suficientes para realizar o sorteio");
        return;
    }

    for (let i = 0; i < tam; i++) {
        
        do {
            numeros = Math.floor(Math.random() * tam);
        } while (listasortear.includes(numeros) || i == numeros);
        listasortear.push(numeros);
    }
    let sorteio1 = document.getElementById("lista-sorteio")
    for (let i = 0; i < tam; i++) {
        
        sorteio1.innerHTML = sorteio1.innerHTML + listadeamigos[i] +'->' + listadeamigos[listasortear[i]]+ '<br>';
        
    }
    document.getElementById("nome-amigo").value = '';
    

}
function reiniciar(){
    document.getElementById("lista-amigos").textContent = '';
    document.getElementById("lista-sorteio").textContent = '';
    listadeamigos = [];
    listasortear = [];
    document.getElementById("nome-amigo").value = '';
}


