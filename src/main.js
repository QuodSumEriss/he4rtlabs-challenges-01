const calcularHora = document.querySelector('#calcular-hora')
let showResult = document.querySelector('#show-result')



function clearElement(elementId) {
  elementId.innerHTML = ''
}

function getElements() {
  let horasDiarias = document.querySelector('#horas-diarias'),
    diasEfetivos = document.querySelector('#dias-efetivos'),
    diasFerias = document.querySelector('#dias-ferias'),
    valorProjeto = document.querySelector('#valor-projeto')

  results = {
    horasDiarias, diasEfetivos, diasFerias, valorProjeto
  }
  return results
}


calcularHora.addEventListener('click', () => {
  clearElement(showResult)
  let el = getElements(),
      horasDiarias = el.horasDiarias.value,
      diasEfetivos = el.diasEfetivos.value,
      diasFerias = el.diasFerias.value,
      valorProjeto = el.valorProjeto.value, 
      valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
  let textShow = `Seu valor por hora será de: R$${valorHora.toFixed(2)}`
      newContent = document.createTextNode(textShow)
      showResult.appendChild(newContent)
      document.innerHTML = showResult
})  
