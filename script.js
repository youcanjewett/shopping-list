var enterButton = document.getElementsByTagName("button")[0];
var list = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var input = document.getElementById("userInput");

console.log(list);

enterButton.addEventListener("click", addListItem);

// adding the input to the list
function addListItem() {
    var newListItem = document.createElement("li");
    newListItem.appendChild(document.createTextNode(input.value));
    list.appendChild(newListItem);

    //clearing the input
    userInput.value = ("");
}