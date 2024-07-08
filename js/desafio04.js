class Jogo {
  constructor(nome, descricao, valor, lancamento, desenvolvido) {
    this.nome = nome;
    this.descricao = descricao;
    this.valor = parseFloat(valor);
    this.lancamento = lancamento;
    this.desenvolvido = desenvolvido;
  }

  mostraNomeJogo() {
    const nomeJogo = document.querySelector('.jogo__infos-nome');
    nomeJogo.innerHTML = `${this.nome}`
    return nomeJogo
  }

  mostraDescricaoJogo() {
    const descricaoJogo = document.querySelector('.jogo__infos-descricao');
    descricaoJogo.innerHTML = `${this.descricao}`
    return descricaoJogo
  }

  mostraLancamentoJogo() {
    const lancamentoJogo = document.querySelector('.info-vendas-lancamento');
    lancamentoJogo.innerHTML = `Data de Lançamento: ${this.lancamento}`
    return lancamentoJogo
  }

  mostraValorJogo() {
    const valorJogo = document.querySelector('.info-vendas-valor');
    valorJogo.innerHTML = `R$: ${this.valor}`
    return valorJogo
  }

  mostraDesenvolvidoJogo() {
    const desenvolvidoPor = document.querySelector('.info-vendas-desenvolvido');
    desenvolvidoPor.innerHTML = `${this.desenvolvido}`
    return desenvolvidoPor
  }
}

const deadByDaylight = new Jogo(
  "Dead By Daylight",
  "A morte não é uma saída. Dead by Daylight é um jogo de horror multijogadores (4x1) em que um dos jogadores assume o papel do Assassino enquanto os outros quatro jogam como Sobreviventes, tentando fugir do Assassino para não serem pegos, torturados e assassinados.",
  59.90,
  '21/03/2022',
  'Behaviour Interactive Inc.',
);

document.querySelector('.btn__secondary').addEventListener('click', () => {
  deadByDaylight.mostraLancamentoJogo();
  deadByDaylight.mostraValorJogo();
  deadByDaylight.mostraDesenvolvidoJogo();
});

document.querySelector('.btn__primary').addEventListener('click', () => {
  deadByDaylight.mostraNomeJogo();
  deadByDaylight.mostraDescricaoJogo();
});
