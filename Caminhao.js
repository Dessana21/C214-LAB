class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(novoEixo){
        this.eixos = novoEixo;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
        console.log("Eixos", this.eixos)
    }
}

var caminhao = new Caminhao();
caminhao.setAno('2007');
caminhao.setPlaca('ABC-4093');
caminhao.eixos('9');
caminhao.exibirDados();