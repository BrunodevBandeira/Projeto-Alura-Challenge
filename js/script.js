const textArea = document.querySelector('.input_textarea');
const textOutput = document.querySelector('.section_resultado_output');
const textInicial = document.querySelector('.section_resultado_inicial');

const vogalMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'á': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const reverseVogalMap = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

function substituirVogais(valorCripto) {
  const cripto = valorCripto.replace(/[aeiou]/g, (vogal) => vogalMap[vogal]);
  exibirResultado(cripto);
}

function voltarVogais(valorCripto) {
  const decripto = valorCripto.replace(/ai|enter|imes|ober|ufat/g, (vogal) => reverseVogalMap[vogal]);
  exibirResultado(decripto);
}

function transformarTexto(botao) {
  const valorCripto = textArea.value;

  valorCripto === '' ? alert('Insira um texto para continuar.') : null;

  const temAcento = /[À-ü]/.test(valorCripto); 

  if (temAcento) {
    alert("O texto não pode conter caracteres acentuados.");
    return
  }  


  botao === 'criptografar' ? substituirVogais(valorCripto) : botao === 'descriptografar' ? voltarVogais(valorCripto) : null;
 
  textOutput.classList.remove('hidden');
  textArea.value = '';
}

function exibirResultado(texto) {
  textOutput.innerHTML = texto;
  textInicial.classList.toggle('hidden', texto !== '');
}
