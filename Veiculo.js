class Veiculo {
  placa;
  ano;

  constructor(placa, ano) {
    this.placa = placa;
    this.ano = ano;
  }

  setPlaca(novaPlaca) {
    this.placa = novaPlaca;
  }

  setAno(novoAno) {
    this.ano = novoAno;
  }

  getPlaca() {
    return this.placa;
  }

  getAno() {
    return this.ano;
  }

  exibirDados() {
      console.log("Placa:", this.placa)
      console.log("Ano:", this.ano)
  }
}

var veiculo = new Veiculo();
veiculo.setAno('2000');
veiculo.setPlaca('xxx-0000');
veiculo.exibirDados();
