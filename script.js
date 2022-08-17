function start() {
  var buttomcauculate_imc = document.querySelector('#Buttom-imc')
  buttomcauculate_imc.addEventListener('click', handleButtomClick)
  var inputpeso = document.querySelector('#1peso')
  var inputpeso = document.querySelector('#1altura')

  inputpeso.addEventListener('input', handleButtomClick)
  inputpeso.addEventListener('input', handleButtomClick)

  handleButtomClick()
  function cauculo_imc(ipeso, ialtura) {
    return ipeso / (ialtura * ialtura)
  }
}

function handleButtomClick() {
  var alt = document.getElementById('1altura')
  var pes = document.getElementById('1peso')
  var res = document.getElementById('1res')

  var altura = Number(alt.value)
  var peso = Number(pes.value)

  var imc = cauculo_imc(peso, altura)
  var formated_imc = imc.toFixed(2).repleace('.', ',')

  res.textContent = formated_imc
}
start()
