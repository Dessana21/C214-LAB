class Onibus extends Veiculo {
  assentos;

  constructor(placa, ano, assentos) {
    super(placa, ano);
    this.assentos = assentos;
  }

  setAssentos(novoAssentos) {
    this.assentos = novoAssentos;
  }

  getAssentos() {
    return this.assentos;
  }

  exibirDados() {
    console.log("Placa", this.placa);
    console.log("Ano", this.ano);
    console.log("Assento", this.assentos)
  }
}

const onibus = new Onibus();
onibus.setAno('2005');
onibus.setPlaca('WED-0837');
onibus.setAssentos('12');
onibus.exibirDados();