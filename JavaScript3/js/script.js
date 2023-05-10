

//console.log(document.getElementById('titulo'))

let titulo = document.getElementById('titulo')

// titulo.innerHTML = 'Alterei o conteúdo'

titulo.style.color = 'blue'
// titulo.style.backgroundColor = 'gray'

console.log(titulo.innerHTML);

function mudar() {
    let novo = document.getElementById('nome')
    titulo.innerHTML = novo.value
}

function inserir() {
    let numero = document.getElementById('posicao').value -1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('corredor')[numero].innerHTML = novo
}

function mostrar() {
    let num = document.getElementById('numero').value -1
    let mes = document.getElementsByTagName('li')[num].innerHTML
    document.getElementById('resultado').innerHTML = mes
}

console.log(document.querySelector('#titulo'));
console.log(document.querySelector('li'))


console.log(document.querySelectorAll('li')[3])