function newItem() {
  //Creating an DOM element node for the list
  var listItem = document.createElement("li");
  //taking the userinput and putting it into a var
  var item = document.getElementById("userInput").value;
  //taking the userinput and creating a DOM Text node
  var text = document.createTextNode(item);
  //creating a Dom element node for the checkbox
  var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
  //creating a Dom element node for the delete button
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  //attaches checkbox, text, and button to the listItem node
  listItem.appendChild(checkbox);
  listItem.appendChild(text);
  listItem.appendChild(button);
  //appends the previous 3 childs to the unordered list
  document.getElementById("todoList").appendChild(listItem);
}
