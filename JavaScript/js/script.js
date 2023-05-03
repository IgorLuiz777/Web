
// window.alert('Este aviso está vindo de um arquivo externo')

document.write('<h1>Neste exemplo eu escrevo diretamento na página</h1>')

console.log('Este texto vai para o console do naveador')

let nome = "Igor Luiz"
console.log(nome)
console.log(typeof nome)
// var idade = 18

// var idade = 20
// VAR não é mais usado

//console.log(idade)

let idade = 18
console.log(idade)
console.log(typeof idade)


const curso = "JS"
console.log(curso)
console.log(typeof curso)

let valor = 15.45
console.log(valor)
console.log(typeof valor)


let frutas = ['maça', 'banana', 'pera', 'uva']
console.log(frutas)
console.log(frutas[3])

let carro = {
    marca: 'honda',
    modelo: "Civic",
    Ano: 2023,
    Cor: "Preto",
    correr: function(){
        alert('O carro está correndo')
    }
}

console.log(carro)
console.log(carro.modelo)
carro.correr()

let num1 = 5
let num2 = "6"

console.log(num1 + num2)
console.log(num1 + parseInt(num2))
console.log(num1 + parseFloat(num2))
console.log(num1 + Number(num2))

let frase = "Estão chegando as provas"

console.log(frase.indexOf('as'))
console.log(frase.lastIndexOf('as'))
console.log(frase.slice('0,5'))
console.log(frase.replace('provas', 'avaliações'))
console.log(nome.slice(0, nome.indexOf(" ")))

let saldo = 54.123131
console.log(saldo.toPrecision(5))


let num3 = 9
let num4 = 3

console.log(num3 + num4)
console.log(num3 - num4)
console.log(num3 / num4)
console.log(num3 * num4)
console.log(num3 % num4)
console.log(num3 ** num4)

let matricula = confirm('Efetuar a matricula')
console.log(matricula)

letNomecompleto = prompt('Digite o seu nome completo: ')
console.log(letNomecompleto)

let primeiro = Number(prompt('Digite o primeiro número: '))
let segundo = Number(prompt('Digite o segundo número'))
console.log('Está é a soma de '+primeiro + ' mais ' + segundo)
console.log(primeiro + segundo)

