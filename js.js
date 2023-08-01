const numero = parseFloat(prompt('Informe seu numero:'))
const numUser = document.getElementById('numero-do-usuario')
numUser.innerHTML = (numero)
const textUser = document.getElementById('texto')
textUser.innerHTML = `<p> Raiz quadrada: ${Math.sqrt(numero)}</p>`
textUser.innerHTML += `<p> ${numero} é inteiro : ${Number.isInteger(numero)}</p>`
textUser.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`
textUser.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}</p>`
textUser.innerHTML += `<p> Arredondando pra cima: ${Math.ceil(numero)}</p>`
textUser.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`


