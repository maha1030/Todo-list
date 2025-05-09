const ul = document.getElementById('list-container')
const input = document.getElementById('input')

function addItem(){
    if (input.value.trim() === "") return;
    const listItem = document.createElement('li')
    listItem.innerHTML = input.value + '<button onclick="deleteItem(event)">Delete</button>';
    ul.append(listItem)
}

function deleteItem(event){
    event.target.parentElement.remove()
}

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Toggle icon
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
