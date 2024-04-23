const appFipe = () => {
  return {
    dadosVeiculos:[
      {
        "id": "motorcycles",
        "tipo": "motos",
        "imagem": "images/moto.svg",
        "alt": "Motocicletas"
      },
      {
        "id": "trucks",
        "tipo": "caminhoes",
        "imagem": "images/truck.svg",
        "alt": "Caminhões"
      },
      {
        "id": "cars",
        "tipo": "carros",
        "imagem": "images/car.svg",
        "alt": "Carros de Passeio"
      } 
    ],
    fabricanteSelecionado:"",
    dadosFabricantes:[],
    buscarFabricante(veiculoSelecionado){
      axios.get(`https://fipe.parallelum.com.br/api/v2/${veiculoSelecionado}/brands`)
        .then((resposta) => {
          this.dadosFabricantes = resposta.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    buscarModelo(marcaSelecionado){
      axios.get(`https://fipe.parallelum.com.br/api/v2/${veiculoSelecionado}/brands`)
        .then((resposta) => {

          this.dadosMarcas = resposta.data;

        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}

