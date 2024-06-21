const pesoUsuario = () => {
  return parseInt(prompt("Insira seu peso"));
};

const alturaUsuario = () => {
  return parseFloat(prompt("Insira seu sua altura"));
};

const alturaAoQuadrado = (alturaUsuario) => {
  return alturaUsuario * alturaUsuario;
};

const calculoImc = (pesoUsuario, alturaIMC) => {
  return pesoUsuario / alturaIMC;
};

const exibeMensagem = (imc) => {
  if (imc < 17) {
    alert(`Seu é ${imc}, você está abaixo do peso`);
  } else if ((imc >= 18, 5 && imc < 25)) {
    alert(`Seu é ${imc}, seu peso está normal`);
  } else if (imc >= 25 && imc < 30) {
    alert(`Seu é ${imc}, você está acima do peso`);
  } else if (imc >= 30 && imc < 35) {
    alert(`Seu é ${imc}, Obesidade grau I`);
  } else if (imc >= 35 && imc < 40) {
    alert(`Seu é ${imc}, Obesidade grau II`);
  } else if (imc > 40) {
    alert(`Seu é ${imc}, Obesidade grau III`);
  }
};

const alturaIMC = alturaAoQuadrado(alturaUsuario());
const imcUsuario = calculoImc(pesoUsuario(), alturaIMC).toFixed(1);

exibeMensagem(imcUsuario);
