//exercicio da aula 9

/* function clickedButton() {
    console.log('O botao foi clicado');
}
function addNewTask() {
    let input = document.querySelector('#newTask');
    let taskList = document.querySelector('#taskList');

    let newTask = input.value;
    input.value= '';
   //console.log(newTask);

    let listItem = document.createElement('li');
    listItem.textContent = newTask;

    taskList.appendChild(listItem);
    

}

function displayValue(event){
    console.log(event.target);
    console.log(event.target.value);

}


document.querySelector('#btnAddTask').addEventListener('click', addNewTask)
document.querySelector('#newTask').addEventListener('change', displayValue)
document.querySelector('#newTask').addEventListener('change', addNewTask)

*/

//exercicio da aula 10

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
    nome = input.value
    idade = input2.value
    let pessoa = new Pessoa(nome, idade)
    pessoas.push(pessoa)
    console.log(pessoas)
}

function registrar() {

    let lista = document.querySelector('#lista')

    let registro = input.value;
    input.value = '';

    let idade = input2.value;
    input2.value = '';

    let listItem = document.createElement('li');
    listItem.textContent = `${registro} ${idade} anos`;
    
    lista.appendChild(listItem);
}


document.querySelector('#butaoregistrar').addEventListener('click', listaDePessoas)

document.querySelector('#butaoregistrar').addEventListener('click', registrar)

/*
document.querySelector('#registro').addEventListener('change', displayValue)
document.querySelector('#idade').addEventListener('change', idade)


















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