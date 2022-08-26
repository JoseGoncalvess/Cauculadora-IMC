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
    msg.innerHTML = `Você está Muito Abaixo do Peso`
  } else if (imc > 17 && imc <= 18.49) {
    msg.innerHTML = `Você está Abaixo do Peso`
  } else if (imc > 18.5 && imc <= 24.99) {
    msg.innerHTML = `Você se encontra no Peso Normal`
  } else if (imc > 25 && imc <= 29.99) {
    msg.innerHTML = `Você está Acima do Peso`
  } else if (imc > 30 && imc <= 34.99) {
    msg.innerHTML = `Você está em Obesidade Grau I`
  } else if (imc > 35 && imc <= 40) {
    msg.innerHTML = `Você está em  Obesidade Grau II`
  } else if (imc > 40 && imc < 500) {
    msg.innerHTML = `Você está em  Obesidade Grau III`
  } else {
    msg.innerHTML = `Caucule agora seu Imc`
  }

  //Add uma imagem
  var fsex = document.getElementsByName('radsex')
  var img = document.createElement('img')
  var br = document.createElement('br')
  img.setAttribute('id', 'foto')
  var genero = ''
  if (fsex[0].checked) {
    genero = 'Homem'
    if (imc < 16.9) {
      img.setAttribute('src', './img/abaixo-h.png')
    } else if (imc > 17 && imc <= 18.49) {
      img.setAttribute('src', './img/abaixo-h.png')
    } else if (imc > 18.5 && imc <= 24.99) {
      img.setAttribute('src', './img/normal-h.png')
    } else if (imc > 25 && imc <= 29.99) {
      img.setAttribute('src', './img/obesidade-h.png')
    } else if (imc > 30 && imc <= 34.99) {
      img.setAttribute('src', './img/obesidade-h.png')
    } else if (imc > 35 && imc <= 40) {
      img.setAttribute('src', './img/obesidade-h+.png')
    } else if (imc > 40 && imc < 500) {
      img.setAttribute('src', './img/obesidade-h+.png')
    } else {
    }
  }
  if (fsex[1].checked) {
    genero = 'Mulher'
    if (imc < 16.9) {
      img.setAttribute('src', './img/abaixo-m.png')
    } else if (imc > 17 && imc <= 18.49) {
      img.setAttribute('src', './img/cabaixo-m.png')
    } else if (imc > 18.5 && imc <= 24.99) {
      img.setAttribute('src', './img/normal-m.png')
    } else if (imc > 25 && imc <= 29.99) {
      img.setAttribute('src', './img/obesidade-m.png')
    } else if (imc > 30 && imc <= 34.99) {
      img.setAttribute('src', './img/obesidade-m.png')
    } else if (imc > 35 && imc <= 40) {
      img.setAttribute('src', './img/obesidade-m+.png')
    } else if (imc > 40 && imc < 500) {
      img.setAttribute('src', './img/obesidade-m+.png')
    } else {
    }
  } else {
  }

  //adiconar a imagem dentro da div resultado  e alinhar conforme citado
  ress.style.textAlign = 'center'
  ress.appendChild(img)
}

start()
