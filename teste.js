var alt = 1.9
var pess = 120

s = pess / (alt * alt)

if ((s = 16 && s < 16.9)) {
  console.log(`Seu pelso IMC é ${s}, Esta Muito abaixo do peso!`)
} else if (s >= 17 && s < 18.9) {
  console.log(`Seu pelso IMC é ${s}, Esta abaixo do peso!`)
} else if (s >= 18.5 && s < 24.9) {
  console.log(`Seu pelso IMC é ${s}, Peso Normla`)
} else if (s >= 25 && s < 29.9) {
  console.log = `Seu pelso IMC é ${s}, Acima do peso`
} else if (s >= 30 && s < 34.9) {
  console.log(`Seu pelso IMC é ${s}, Obesidade Grau I`)
} else if (s >= 35 && s < 40) {
  console.log(`Seu pelso IMC é ${s}, Obesidade Grau II`)
} else {
  console.log(`Seu pelso IMC é ${s}, Obesidade Grau III`)
}
