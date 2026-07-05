
const telefoneInput = document.getElementById('phone');

telefoneInput.addEventListener('input', (e) => {
  let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
  
  // Limita o tamanho máximo para 11 dígitos (DDD + 9 dígitos do celular)
  valor = valor.substring(0, 11);

  // Aplica a máscara dependendo da quantidade de dígitos
  if (valor.length > 2) {
    valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
  }
  if (valor.length > 10) {
    valor = `${valor.substring(0, 10)}-${valor.substring(10)}`;
  }

  e.target.value = valor;
});
