const inputBruto = document.querySelector('#brutoInput');
console.log(inputBruto);
const outputBruto = document.querySelector('#brutoOutput');

inputBruto.addEventListener("input", (e) => {
    let value = e.target.value;

    let dizimoCulto = (value*0.1).toFixed();
    let dizimoBeneficencia = ((value*0.1)/3).toFixed();
    let ofertaPatrimonio = (((value*0.1)/3)*2).toFixed();
    let total = +dizimoCulto + +dizimoBeneficencia + +ofertaPatrimonio;
    let restante = value - total;
    outputBruto.innerText = `R$${value} - Valor Bruto\n
    ----------------------------------\n
    Dízimos e Ofertas
    R$${dizimoCulto} - Culto\n
    R$${dizimoBeneficencia} - Beneficência\n
    R$${ofertaPatrimonio} - Patrimônio\n
    ----------------------------------\n
    Total à dizimar
    R$${total}
    ----------------------------------\n
    Sobra - seu salário real
    R$${restante}
    `
})

function atualizarTexto() {
    const brutoInput = document.getElementById('brutoInput').value;
    document.getElementById('brutoOutput').innerText = result;
  }
  
  function limparTexto() {
    document.getElementById('brutoOutput').innerText = '';
  }

function limparCampo() {
    document.getElementById('brutoInput').value = '';
  }
  
document.getElementById('limparBotao').addEventListener('click', limparCampo);
  
  
  // Função para salvar o texto como imagem jpg
  function salvarComoImagem() {
    const output = document.getElementById('brutoOutput');
  
    // Utiliza o html2canvas para renderizar o elemento em um canvas
    html2canvas(output).then(function (canvas) {
      // Cria um elemento <a> para fazer o download da imagem
      const link = document.createElement('a');
      link.download = 'meu-dizimo.jpg';
      link.href = canvas.toDataURL('image/jpeg');
  
      // Clica no link para iniciar o download
      link.click();
    });
  }
  
// Função para copiar o texto para a área de transferência
function copiarTexto() {
    const output = document.getElementById('brutoOutput');
    const texto = output.innerText;
  
    // Cria um elemento temporário para copiar o texto
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
  
    // Seleciona o texto no campo temporário
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis
  
    // Copia o texto para a área de transferência
    document.execCommand('copy');
  
    // Remove o campo temporário
    document.body.removeChild(textarea);
  }


  // Adiciona um ouvinte de evento ao botão para atualizar o texto
document.getElementById('brutoOutput').addEventListener('input', atualizarTexto);

// Adiciona um ouvinte de evento ao botão para limpar o texto
document.getElementById('limparBotao').addEventListener('click', limparTexto);

// Adiciona um ouvinte de evento ao botão para salvar como imagem
document.getElementById('salvarBotao').addEventListener('click', salvarComoImagem);

// Adiciona um ouvinte de evento ao botão para copiar o texto
document.getElementById('copiarBotao').addEventListener('click', copiarTexto);

