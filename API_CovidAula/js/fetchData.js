//variavel que armeza o grafico
let meuGrafico;

//função que cria nosso gráfico
const criarGrafico = respostaDaApi => {
    //variável para armazenar dados da api
    const dadosDaApi = respostaDaApi.data.data;
    //obtemos o contexto do nosso canvas (no caso 2d)
    const contexto = document.getElementById("chart-container").getContext('2d');

    if(meuGrafico) {
        meuGrafico.destroy( );
    }

    meuGrafico = new Chart( contexto, {
        type: 'pie',
        data: {
            labels: ['Mortes', 'Confirmados', 'Confirmados Descartados'],
            datasets: [
                {
                    data: [dadosDaApi.deaths, dadosDaApi.confirmed, dadosDaApi.confirmed_diff],
                    backgroundColor: ['red', 'blue', 'green'],
                }
            ]
        }
    });
}

//Função que busca os dados
export const buscaDados = ( paisDaBusca, dataDaBusca ) => {
    axios.get( `https://covid-api.com/api/reports/total?date=${dataDaBusca}&iso=${paisDaBusca}` ).then(criarGrafico).catch( (error) => console.error(error) );
}