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

function newTask() {
    let input = document.querySelector('#registro');

    let registro = input.value;
    input.value= '#registro';
    console.log(newTask);

    let listItem = document.createElement('li');
    listItem.textContent = newTask;

    lista.appendChild(listItem);
    

}

//console.log(`registro de: ${registro}`)

function displayValue(event){
    console.log(event.target);
    console.log(event.target.value);

}


document.querySelector('#butaoregistrar').addEventListener('click', registro)
document.querySelector('#registro').addEventListener('change', displayValue)
document.querySelector('#registro').addEventListener('change', registro)


















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