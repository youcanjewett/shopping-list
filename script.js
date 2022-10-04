var enterButton = document.getElementsByTagName("button")[0];
var list = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var input = document.getElementById("userInput");

// using "Enter" key to add input
function addItemWithKeypress(e) {
  if (input.value.length > 0 && e.key === "Enter") {
    addListItem();
  }
}

// using the button to add input
function addItemWithButton() {
  if (input.value.length > 0) {
    addListItem();
  }
}

// adding input to list
function addListItem() {
  var newListItem = document.createElement("li");
  newListItem.appendChild(document.createTextNode(input.value));
  list.appendChild(newListItem);

  //clearing the input
  userInput.value = "";
}

// cross off list item when clicked
function strikethrough(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}

function clearList() {
    list.innerHTML = "";
}

enterButton.addEventListener("click", addItemWithButton);
clearButton.addEventListener("click", clearList);
input.addEventListener("keypress", addItemWithKeypress);
list.addEventListener("click", strikethrough);
