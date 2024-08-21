//Alguns erros comuns

// const numero : 1° Erro: Não declarar uma constante 
//
const minhaVariavel = "oi";
console.log(minhaVariavel); // erro de variavel nao declarada
 
//log -> registro
const minhaVar2 = true;



console.error('deu errado')

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeMinima>= 18) { 
    console.log ("cerveja")
} else {
    console.log ("suquinho")
}

//
//Valor ternário
console.log(idadeCliente>= idadeMinima ? "cerveja" : "todinho")
//
//
//

//Template string 

const nome = "Luanna";
const idade = "17"
const cidadeNatal = "Foz do Iguaçu."

const apresentaçao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentaçao);

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é${cidadeNatal}`
console.log (apresentacao2); 
