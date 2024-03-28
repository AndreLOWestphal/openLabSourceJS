

//JavaScript conhecimento Basico
// Pede os números ao usuário
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

// Operação matemática
const soma = num1 + num2;
const subtracao = num1 - num2;

// Exibe os resultados
alert(`Soma: ${soma}`);
alert(`Subtração: ${subtracao}`);


//JavaScript conhecimento Intermediario
// Pede os números ao usuário
let num3 = parseFloat(prompt("Digite o primeiro número:"));
let num4 = parseFloat(prompt("Digite o segundo número:"));

// Validação para números válidos
while (isNaN(num1) || isNaN(num2)) {
  alert("Digite apenas números válidos!");
  num3 = parseFloat(prompt("Digite o primeiro número:"));
  num4 = parseFloat(prompt("Digite o segundo número:"));
}

// Operação matemática
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

// Exibe os resultados
alert(`Multiplicação: ${multiplicacao}`);
alert(`Divisão: ${divisao}`);


//JavaScript conhecimento Avançado
function calcular(operacao, num1, num2) {
    switch (operacao) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Operação inválida!";
    }
  }
  
  // Pede a operação e os números ao usuário
  const operacao = prompt("Digite a operação (+, -, *, /):");
  const num5 = parseFloat(prompt("Digite o primeiro número:"));
  const num6 = parseFloat(prompt("Digite o segundo número:"));
  
  // Exibe o resultado
  const resultado = calcular(operacao, num5, num6);
  alert(`Resultado: ${resultado}`);