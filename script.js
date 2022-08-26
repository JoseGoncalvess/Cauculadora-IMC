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
  var msg = document.querySelector('#ress')

  var altura = Number(input_altura.value)
  var peso = Number(input_peso.value)

  var imc = cauculo_imc(peso, altura)
  var formated_imc = imc.toFixed(2).replace('.', ',')
  imc_result.textContent = formated_imc

  if (imc < 16.9) {
    msg.innerHTML = `Você se encontra Muito Abaixo do Peso`
  } else if (imc > 17 && imc <= 18.49) {
    msg.innerHTML = `Você se encontra Abaixo do Peso`
  } else if (imc > 18.5 && imc <= 24.99) {
    msg.innerHTML = `Você se encontra no Peso Normal`
  } else if (imc > 25 && imc <= 29.99) {
    msg.innerHTML = `Você se encontra Acima do Peso`
  } else if (imc > 30 && imc <= 34.99) {
    msg.innerHTML = `Você se encontra em Obesidade Grau I`
  } else if (imc > 35 && imc <= 40) {
    msg.innerHTML = `Você se encontra Obesidade Grau II`
  } else if (imc > 40 && imc < 100) {
    msg.innerHTML = `Você se encontra Obesidade Grau III`
  } else {
    msg.innerHTML = ``
  }
}

start()
