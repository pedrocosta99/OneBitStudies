function addToList() {
  event.preventDefault()
  let tipo = document.getElementById("tipo").value
  let area = document.getElementById("area").value
  let alugado = document.getElementById("alugado").checked ? 'Alugado' : 'Disponível'

  let imovel = document.createElement('li')
  imovel.textContent = `Tipo: ${tipo} - Area: ${area}m2 - ${alugado}`

  let lista = document.getElementById('cadastros')
  lista.appendChild(imovel)
}
