/*
function imprimeNomeCompleto(nome, sobrenome){
    console.log(nome + " "+sobrenome);
}
imprimeNomeCompleto("Thiago","Barroso");
*/
/*
function verificaPar(numero){
    primo = false;
    console.log(typeof(numero));
    if(typeof(numero == 'number')){
        console.log("É número")
        //console.log(numero % 2,typeof(numero % 2))
        if(numero % 2 == 0){
            console.log("Entrou no if")
            primo = true;
        }
        return primo;

    }else {
        return "Não é um numero";
    }
    
}
console.log(verificaPar("nada"))


function imprimePar(retorno){
    if(retorno === true){
        console.log("É Par");
    }else if(retorno === false){
        console.log("Não é Par")
    }else {
        console.log(retorno)
    }
}

imprimePar(verificaPar("nada"));
*/

// function forLoop(numero){
//     for(let i = 0;i<numero;i++){
//         console.log(i)
//     }
// }

// forLoop(10)

// function whileLoop(numero){
//     let i = 0;
//     while((i<numero) || (i > -1 * numero)){
//         console.log(i);
//         i++;
//     }
// }
// whileLoop(-5)

let vetor = [1,2,3]
console.log(typeof(vetor),vetor)
console.log(vetor[1])

let dict = {1:"Thiago",
             2:"Barroso",
             3:"Maciel"};
console.log(typeof(dict),dict)
console.log(dict[1])