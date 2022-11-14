//exercicio da aula 13

/*function validateEmail(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue.search('@') == 1) {
        displayError ('Email nao é valido', field);
    } else {
        clearError(field);
    }

    field.clssList.remove('not-validated');
    checkEnableSubmit();

}

function validateNotEmpty(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue == ''){
        displayError('Campo não pode ser vazio', field);
    } else {
        clearError(field);
    }
    field.clssList.remove('not-validated');
    checkEnableSubmit();

}

function displayError(message, field) {
    clearError(field)
    field.classList.add('is-invalid');
    let error =document.createElement('small');
    error.style.color ="red";
    error.classList.add('error-message');
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearError (field) {
    let container = field.parantElement;
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }
    field.classList.remove('is-invalid')
}
function checkEnableSumit () {
    let form = document.querySelector('#form');
    let notValidated = form.querySelectorAll('.not-validated');
    let errors = form.querySelectorAll('.is-invalid');

    if (errors.length == 0 && notValidated.length == 0) {
        enableSubmit();
    } else {
        disableSubmit();
    }
}

function enableSubmit(){
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');

    submit.disabled = false;
}
function disableSubmit(){
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');

    submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add ('not-validated'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener ('keyup', validateEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener ('keyup', validateNotEmpty));
*/



//EXERCICIO 5- API-

// consulta API publica



//coletar os dados de um formulario
//consultar API
//Exibir resultados

let cep

let valorCep = 59084320

fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    .then(response => response.json())
        .then(data => cep = data)

// escolher API

//*escolher uma API para consulta
//*checar documentaçao
//*entender parametros e resposta

//formularios

//*receber dados que serao usados como parametros
//*consulta API

//exibicao de dados

//*exibir dados recebidos pela API
//*filtrar esse resultado
