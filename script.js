let idade = 35  
let humana = true
const mês = `Janeiro`
let nome = `Rafael`
let sobrenome = `Esposito`

if (idade >=18) {
    console.log (`Você é maior de idade`)
}
if ( (idade >=18) && (humana == true)){
    console.log (`Voce é maior de idade e humano`)
}
if ( (mês == `Janeiro`) || (mês == `Dezembro`)){
    console.log ( `Parabéns pelo seu dia`)
}else {
    console.log ( `Ainda não chegou seu aniversário`)
}
if (nome.substring(0,1) === `R`) {
    console.log ( `Letra inicial do meu nome é R`)
}
if (nome.length > 5 || nome.substring(0,1) ===`E`) {
    console.log(`Desafio concluido`)
}
