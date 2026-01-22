function calcularJuros() {
  const valorDivida = Number(document.getElementById("valorDivida").value);
  const diasVencimento = Number(document.getElementById("diasVencimento").value);

  let saida = "";
  let valorJurosPercentual = 0;

  // Validação do valor da dívida
  if (valorDivida <= 0) {
    saida = "❌ O valor da dívida deve ser maior que zero!";
    document.getElementById("saida").textContent = saida;
    return;
  }

  // Se não há atraso
  if (diasVencimento <= 0) {
    saida = "✅ Você está em dia! Não há juros aplicados.";
    document.getElementById("saida").textContent = saida;
    return;
  }

  // Define taxa de juros
  if (diasVencimento > 15) {
    valorJurosPercentual = 10;
  } else {
    valorJurosPercentual = 5;
  }

  const totalJuros = (valorDivida * valorJurosPercentual) / 100;
  const valorTotal = valorDivida + totalJuros;

  // Exibe SOMENTE o resultado final (sem repetição desnecessária)
  saida += `Valor original da dívida: R$ ${valorDivida.toFixed(2)}\n`;
  saida += `Dias em atraso: ${diasVencimento}\n`;
  saida += `Taxa de juros aplicada: ${valorJurosPercentual}%\n`;
  saida += `Valor dos juros: R$ ${totalJuros.toFixed(2)}\n`;
  saida += `\n💰 Valor total com juros: R$ ${valorTotal.toFixed(2)}\n`;

  document.getElementById("saida").textContent = saida;
}
