function start() {
  var buttomcauculate_imc = document.querySelector('#buttom_cauculate_imc')
  buttomcauculate_imc.addEventListener('click', handleButtomClick)
  handleButtomClick()
  var input_altura = document.querySelector('#txtaltura')
  var input_peso = document.querySelector('#txtpeso')

  input_altura.addEventListener('input', handleButtomClick)
  input_peso.addEventListener('input', handleButtomClick)
}

function cauculo_imc(peso, altura) {
  return peso / (altura * altura)
}
function handleButtomClick() {
  var input_altura = document.querySelector('#txtaltura')
  var input_peso = document.querySelector('#txtpeso')
  var imc_result = document.querySelector('#txtresult')

  var altura = Number(input_altura.value)
  var peso = Number(input_peso.value)

  var imc = cauculo_imc(peso, altura)
  var formated_imc = imc.toFixed(2).replace('.', ',')
  imc_result.textContent = formated_imc
}

start()
