//aqui vamos a declarar tudo que seja possivel
let pessoas = []
let nome
let idade
let cor
let animal

//devemos colocar sempre um funcion usaremos this.
function Pessoa(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.animal = animal;
}

//para fazer repetiçao e pouco ussado o while mas nos vamos a usar
//dentro do while colocaremos o que ja declaramos sem o let e com prompt mais a mensagem que queremos mostrar
while (question != 'n') {
    nome = prompt('Digite o seu nome')
    idade = Number(prompt(`${nome} qual é tua idade?`))
    cor = prompt (`Certo, ${nome} agora, qual é sua cor favorita?`)
    animal = prompt (`Bom, agora para finalizar, digite qual é seu animal favorito ${nome}`)

    let pessoa = new Pessoa(nome, idade, cor, animal)

    pessoas.push(pessoa) //isto e para adicionar uma nova pessoa na lista dos arrays []
    var question = prompt('Deseja fazer registro de outra pessoa? (S/N)')

}

//nesta parte ja vamos a mostrar os valores recoletados  usando console.log para mostrar no console
console.log('Quantidade de pessoas registradas:')
console.log(pessoas.length)
console.log('') //para deixar um espaço em branco

console.log('Nome das Pessoas Registradas:')
pessoas.forEach(pessoa => console.log(pessoa['nome']))
console.log('')

console.log('Cor favorito das Pessoas Registradas:')
pessoas.forEach(cor => console.log(cor['cor']))
console.log('')

console.log('Animal favorito das Pessoas Registradas:')
pessoas.forEach(animal => console.log(animal['animal']))
console.log('')

console.log('Vamos observar quem é a pessoa mais velha e mais jovem e suas cores e animais favoritos? Vamos...')

let pessoaMaisVelha = pessoas.sort((a ,b) => { //sort sempre va junto ao return pq e uma funcao que permite ajeitar o que queremos de maior a menor e viceversa
    return a.idade - b.idade; 
})

let nomeMaisVelho = pessoas[pessoas.length-1].nome //lengt significa quantidade de pessoas que foram registradas colocamos -1 para seleccionar o numero exacto sendo que e contado a partir de 0
let idadeMaisVelha = pessoas[pessoas.length-1].idade
let corDoMaisVelho = pessoas[pessoas.length-1].cor
let animalDoMaisVelho = pessoas[pessoas.length-1].animal

console.log(`Temos aqui a pessoa mais velha que é ${nomeMaisVelho} 
com ${idadeMaisVelha} anos de idade, sua cor favorita é ${corDoMaisVelho} 
e seu animal favorito é ${animalDoMaisVelho}`)

let pessoaMaisJovem = pessoas.sort((a ,b) => {
    return b.idade - a.idade;
})

let nomeMaisJovem = pessoas[pessoas.length-1].nome
let idadeMaisJovem = pessoas[pessoas.length-1].idade
let corDoMaisJovem = pessoas[pessoas.length-1].cor
let animalDoMaisJovem = pessoas[pessoas.length-1].animal

console.log(`E conseguimos a pessoa mais jovem que é ${nomeMaisJovem} 
com ${idadeMaisJovem} anos de idade, 
sua cor favorita é ${corDoMaisJovem} 
e seu animal favorito é ${animalDoMaisJovem}`)














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