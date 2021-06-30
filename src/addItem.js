export default function showAddItemForm() {
  let style = document.getElementById("addItemForm").style.display;
  "none" == style ? (style = "block") : (style = "none");
  document.getElementById("settingsForm").style.display = style;
}

document.getElementById("itemSubmit").addEventListener("click", submitInfo);
document.getElementById("itemCancel").addEventListener("click", closeItemForm);

function submitInfo() {
  createElement();
  closeItemForm();
}

function createElement() {
  const input = document.getElementById("item");
  let item = input.value;
  const listItem = document.createElement("div");
  listItem.textContent = item;
  document.getElementById("content").appendChild("listItem");
}

function closeItemForm() {
  document.getElementById("addItemForm").style.display = "none";
}
