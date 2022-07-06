var add = 1
function clickMe() {
  console.log("Fui clicado")
  document.getElementById('click').className = `mx-${add}`
  add +=1
  if (add==5){add = 0}
}
function focusMe() {
  console.log("Fui focado!")
}
function blurMe() {
  console.log("Fui desfocado!")
}
function changeMe() {
  console.log("Fui alterado!")
}
function overMe() {
  console.log("Mouse aqui")
}
