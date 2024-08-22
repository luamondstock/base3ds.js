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
  // A ordem dos parâmetros é importante!!
imprimeTexto(nomeIdade("Lua", 17))
imprimeTexto(nomeIdade(22, "ricardão"))

imprimeTexto(multiplicao())
// Você pode definir um parâmetro inicial para sua função 
function multiplicao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
imprimeTexto(multiplicao(somaDeNumeros(3,4),somaDeNumeros(5,10)));



