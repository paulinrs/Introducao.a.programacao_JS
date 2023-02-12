console.log('Olá, Javascript!')

var userName = 'Paulinho'

document.getElementById('user_name').innerHTML = userName

//*Variáveis*//

//var nome = 'Yoda'
//var idade = 100
//var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

//*Operadores matemáticos*//

// (+) para somar
// (-) para subtrair
// (*) para multiplicar
// (/) para dividir

//->EXEMPLO
// var n1 = 11
// var n2 = 11

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1 + n2
// console.log(total)<-

//*Operadores de comparação*//

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. ->
//Esse operador também pode ser chamado de diferente de.
// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro ->
//se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro ->
//se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. ->
//Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. ->
//Caso seja retorna verdadeiro

// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. ->
//Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. ->
//Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

//->EXEMPLO
// var v1 = 5
// var v2 = 5

// var resultado = v1 === v2
// console.log(resultado) <-

//*Funções*//

// function soma(n1, n2){
//     console.log(n1 + n2)
// }

//soma(5, 100)

// function boasVindas(nome) {
//     alert(nome + ', seja bem-vindo(a)')
// }
// boasVindas('Paulo Roberto')

// function soma(n1, n2){
//     return n1 + n2
// }

// var resultado = soma(5,5)
// console.log(resultado)

//*Controle de fluxos com BDD*//

//(Historia de usuario)

//Sendo um cliente correntista do banco
//Posso sacar dinheiro em caixas eletrônicos 
//Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

//(BDD)

//Cenario 1: Saque com Sucesso
//Dado que meu saldo é de 1000 reais 
//Quando faço um saque de 500 reais 
//Então o valor do saque deve ser deduzido do meu saldo

//Cenario 2: Saque com valor superior ao saldo
//Dado que meu saldo é de 600 reais
//quando faço um saque de 601 reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//Cenario 3: Saque com valor máximo
//Dado que meu saldo é de 1000 reais
//E o valor máximo por operação é de 700 reais
//Quando faço um saque com valor e 701 reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

//EXEMPLOS->

//->Cenario 1*

// var saldo = 1000

// function saque(valor) {
//     saldo = saldo - valor
// }

// saque(500)
// console.log(saldo)<-

//->Cenario 2*

// var saldo = 600

// function saque(valor) {

//     if(valor > saldo){
//         console.log('Valor do saque superior ao saldo')
//     } else{
//         saldo = saldo - valor
//     }

// }

// saque(601)
// console.log(saldo)

//->Cenario 3*

// var saldo = 1000

// function saque(valor) {

//     if(valor > saldo){
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor de saque superior ao maximo permitido por operação')
//     } else{
//         saldo = saldo - valor
//     }

// }

// saque(701)
// console.log(saldo)

//Arrays//

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
//(cria uma lista onde se inicia com O e depois continua 1, 2, 3...)
// personagens.push('C3pO') //<-add um item a lista
// personagens.push('R2D2')

// personagens.pop()  //<-remove o ultimo item da lista

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// }) //<-remove um item especifico da lista

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// }) //<-seleciona um item especifico da lista

// console.log(personagens)

//Controles de repetição (Loops)//

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

//(EXEMPLO 1)
// personagens.forEach(function(p){
//         console.log(p)
// })

//(EXEMPLO 2. PASSANDO SOMENTE O (I) IMPRIME NUMERICOS, PASSANDO (personagens[i]) IMPRIME NOMES)

// for (var i in personagens){
//     console.log(personagens[i])
// }

//(EXEMPLO 3. CÓDIGO VAI SER EXECUTADO ATÉ A CONDIÇÃO RETORNAR FALSE)

// for (var i = 0; i <= 10; i++){
//     console.log(i)
// }

//Objetos (Super Variáveis)//

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostrarIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     },

//     mostrarBolean: function(){
//         console.log(`O ${this.nome} é um jedi? R:${this.jedi}.`)
//     }
// }

// yoda.mostrarIdade()
// yoda.mostrarBolean()

//Constantes//

// var name = 'Darth Vader'
// console.log(name)

// name = "Mestre Yoda"
// console.log(name)

// //var pode mudar o nome -> const não pode mudar o nome***


// const nome = 'Darth Vader'
// console.log(nome)

// nome = "Mestre Yoda"
// console.log(nome)