export default addItem;

function addItem() {
  //display add item box
  displayForm();
  //create new list item with supplied content
  createItem();
  //display new item
}

function displayForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("submit").addEventListener("click", submitInfo);
}

function createItem() {
  document.createElement("div");
}

function submitInfo() {
  createItem();
}

export function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
