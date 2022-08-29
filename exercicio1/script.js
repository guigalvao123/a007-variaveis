const nome = "Guilherme Padua"
let idade = "31"

console.log (typeof nome)
console.log (typeof idade)

//Por que esse tipo foi impresso? - R: Requisitei ao programa me retorna-se no log qual tipo de entrada passei ao script.

const nomePrompt = prompt ("Qual o seu nome?")
console.log(nomePrompt)
console.log (typeof nomePrompt)

let idadePrompt= prompt ("Qual a sua idade?")
console.log(idadePrompt)
console.log (typeof idadePrompt)

//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? R: Que a idade retorna ainda como string, nao como numero.

console.log ("Ola",(nomePrompt), "voce tem",(idadePrompt),"anos de idade!")