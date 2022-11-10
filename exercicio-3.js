
let pessoa1 = prompt('Qual e o nome da primeira pessoa?')
let idade1= Number(prompt(`${pessoa1} digita tua idade`))

confirm (`deseja adicionar outra pessoa? (S/N)`)

let pessoa2 = prompt('Qual e o nome da segunda pessoa?')
let idade2= Number(prompt(`${pessoa2} digita tua idade`))
    

console.log(`Registro de: \n ${pessoa1} \n ${pessoa2}`)


if (idade1 > idade2) {
    console.log(`A pessoa mais velho/a é: \n ${pessoa1}, ${idade1} anos`)
} else {
    console.log(`A pessoa mais velho/a é: \n ${pessoa2}, ${idade2} anos`)
}






























//criando novos tipos de objetos
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log('Ola, meu nome e ${this.name}')
}
let me = new Person('Lucas', 22);
me.sayHello();*/
//Ola, meu nome e lucas


/* agrupar dados em estruturas

*partir do exercicio anterior
*criar um modelo de objeto para guardar as informaçoes de pessoas
*receber dados de uma quantidade arbitraria de pessoas
*mover comparaçoes para funçoes

1.objeto modelo
*criar uma funçao para ser usada como construtora
*agrupar os dados de cada pessoa em um obejto
ex.
new Pessoa('Bob',28,azul);

2.quantidade variavel de registros
*ao final de um registros exibir mensagem perguntando se outro registro deve ser adicionado
*so mostrar comparaçoes apos todos os registros serem feitos.

3.mover comparaçoes para funcoes
*separar cada tipo de comparaçao ou operaçao realizada com os dados em uma funçao especifica
*chamar funcoes ao final.
*/

//exercicio da aula 9
/*
function clickedButton() {
    console.log('o botao foi clicado');
}
function addNewTask() {
    let input = document.querySelector('#newTask');
    let taskList = document.querySelector('#taskList');

    let newTask = input.valeu;
    input.value = '';
    //console.log(newTask);

    let listItem = document.createElement('li')
    listItem.textContent = newTask;

    taskList.appendChild(listItem);
}


function displayValue(event){
    console.log(event.target);
    console.log(event.target.valeu);

}

document.querySelector('#btnAddTask').addEventListener('click', addNewTask)
document.querySelector('#newTask').addEventListener('change', displayValue)
document.querySelector('#newTask').addEventListener('change', addNewTask)

*/