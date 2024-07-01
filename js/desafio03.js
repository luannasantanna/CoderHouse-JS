const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let valor = parseInt(document.querySelector(".valor-input").value);
  const QtParcelas = parseInt(document.querySelector(".parcelas-input").value);

  if (valor == 0 || QtParcelas == 0) {
    alert("Por favor insira um valor válido");
  } else {
    for (i = 1; i <= QtParcelas; i++) {
      const valorComJuros = (valor * 15) / 100 + valor;
      const parcela = valorComJuros / QtParcelas;
  
      console.log(`Com juros de 15% no valor, a ${i}ª parcela fica em R$:${parcela} reais.`);
    }
  }

});