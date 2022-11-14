let input = document.querySelector('#registro');
let input2 = document.querySelector('#idade');

let pessoas = []
let nome
let idade

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function listaDePessoas() {
    let paragrafo = document.querySelector('#paragrafo') 
    nome = input.value
    idade = input2.value
    let pessoa = new Pessoa(nome, idade)
    pessoas.push(pessoa)
    
    pessoas.sort((a ,b) => { 
        return a.idade - b.idade; 
    })

    let nomeMaisVelho = pessoas[pessoas.length-1].nome 
    let idadeMaisVelha = pessoas[pessoas.length-1].idade
   
    paragrafo.textContent = `A pessoa mais velha é ${nomeMaisVelho} com ${idadeMaisVelha} anos.`

}

function registrar() {

    let lista = document.querySelector('#lista')
    let title = document.querySelector('h4')

    title.textContent = 'Registro de:'

    let registro = input.value;
    input.value = '';

    let idade = input2.value;
    input2.value = '';

    let listItem = document.createElement('li');
    listItem.textContent = `${registro} ${idade} anos`
    lista.appendChild(listItem);
}




document.querySelector('#butaoregistrar').addEventListener('click', listaDePessoas)
document.querySelector('#butaoregistrar').addEventListener('click', registrar)











/* receber dados atraves de formularios

*partir do exercicio anterior
*criar um formularios
*exibir dados e comparaçoes na pagina 

Adeus, prompt!

*sustituir o recebimento de dados com prompt por um formulario na pagina
*formulario
-evento submit
-preventDefault()

Ate logo, console!

*mostrar dados recebidos na pagina
*exibir mensagens e comparaçoes na pagina
*/