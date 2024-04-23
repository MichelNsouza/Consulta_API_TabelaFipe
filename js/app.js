const appFipe = () => {
  return {
    url:"https://fipe.parallelum.com.br/api/v2/",
    
    veiculoSelecionado:"",
    veiculoSelecionadoBol:false,
    fabricanteSelecionado:"",
    modeloSelecionado:"",
    
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
    dadosFabricantes:[],
    dadosModelos:[],

    buscarFabricante(){
      axios.get(
        this.url+`${this.veiculoSelecionado}/brands`
      ).then((resposta) => {
        this.dadosFabricantes = resposta.data;
      }).catch((error) => {
        console.log(error);
      })
    },
    
    buscarModelo(){
    axios.get(
        this.url+`${this.veiculoSelecionado}/brands/${this.fabricanteSelecionado}/models`
      ).then((resposta) => {
          this.dadosModelos = resposta.data;
        }).catch((error) => {
          console.log(error);
        })
      },
    
  }
}


