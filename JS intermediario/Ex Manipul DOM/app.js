function saveHouse() {
  // save input text
  let area = document.querySelector("input[name='area']").value
  let number = document.querySelector("input[name='number']").value
  let neighborhood = document.querySelector("input[name='neighborhood']").value
  let city = document.querySelector("input[name='city']").value
  // Create and write on new li element inside
  let newListValue = document.createElement("li")
  newListValue.innerText = area + "m², número " + number + " (" + neighborhood + " - " + city + ")"

  // Creating a whole functional button from JS, to remove li item
  let removeButton = document.createElement("button")
  removeButton.type = "button"
  removeButton.innerText = "Remover"
  removeButton.setAttribute("onclick", "removeHouse(this)")
  newListValue.appendChild(removeButton)

  // appending li item inside of UL
  document.getElementById("house-list").appendChild(newListValue)
}
function removeHouse(button) {
  let liToRemove = button.parentNode
  document.getElementById("house-list").removeChild(liToRemove)
}
