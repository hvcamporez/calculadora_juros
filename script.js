function calcularJuros() {
  const valorDivida = Number(document.getElementById("valorDivida").value);
  const diasVencimento = Number(document.getElementById("diasVencimento").value);

  let saida = "";
  let valor_juros = 0;

  if (valorDivida > 0) {

    if (diasVencimento > 0) {

      if (diasVencimento > 15) {
        valor_juros = 10;
      } else {
        valor_juros = 5;
      }

      const total_juros = (valorDivida / 100) * valor_juros;
      const valor_total = valorDivida + total_juros;

      saida += `Valor original da dívida: R$ ${valorDivida.toFixed(2)}\n`;
      saida += `Dias atrasados: ${diasVencimento}\n`;
      saida += `Taxa de Juros: ${valor_juros}%\n`;
      saida += `Valor total com juros: R$ ${valor_total.toFixed(2)}\n`;

    } else {
      saida = "Você está em dia!";
    }

  } else {
    saida = "O valor da dívida deve ser maior que zero!";
  }

  document.getElementById("saida").textContent = saida;
}
