import { buscaDados } from "./fetchData.js";

//função que será chamada quando o formulário for enviado
const enviarDadosDoForm = event => {
    //prevnims os eventos padrões da tag form
    event.preventDefault( );

    //obtemos os valores dos inputs
    var country = document.getElementById('country').value;
    var data = document.getElementById('date').value;

    buscaDados(country, data);




}

document.getElementById('search-form').addEventListener('submit', enviarDadosDoForm);

function funcaoInicial(){
    buscaDados('usa', '2022-01-10')
}

funcaoInicial();