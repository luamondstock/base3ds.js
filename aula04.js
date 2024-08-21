//FUNÇOES!!!!

let x  = "nada";
console.log (x);
x = "Oi"
y = "Tchau"

// Declaração de função 

imprimeTexto(y)

// 1) Declara a função 

function imprimeTexto(texto) {
    console.log(texto)
} 

// 2) Chamar/executar a função 

imprimeTexto(x)
imprimeTexto("Eu estudo")

function soma() {
    return 2 +2 
}
 
console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4,7))
imprimeTexto(somaDeNumeros(24,11))

function somaDeNumeros(numero01, numero02){
    return numero01 + numero02 
}
function nomeIdade(nome,idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`
}
 imprimeTexto(nomeIdade("Lua", 17))
 imprimeTexto(nomeIdade)



