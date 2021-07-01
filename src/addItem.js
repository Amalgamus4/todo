export default function showAddItemForm() {
  let style = document.getElementById("addItemForm").style.display;
  "block" == style ? (style = "none") : (style = "block");
  document.getElementById("addItemForm").style.display = style;
}

document.getElementById("itemSubmit").addEventListener("click", submitInfo);
document.getElementById("itemCancel").addEventListener("click", closeItemForm);

function submitInfo() {
  createElement();
  closeItemForm();
}

function createElement() {
  const input = document.getElementById("item");
  let textInput = input.value;
  const listItem = document.createElement("div");
  listItem.textContent = textInput;
  listItem.classList.add("listItem");
  document.getElementById("content").appendChild(listItem);
  addButtons(listItem);
}

function closeItemForm() {
  document.getElementById("addItemForm").style.display = "none";
}

function addButtons(item) {
  const itemDone = document.createElement("button");
  itemDone.classList.add("btn");
  itemDone.textContent = "Done";
  itemDone.addEventListener(
    "click",
    () => (itemDone.parentElement.style.textDecoration = "line-through")
  );

  const removeItem = document.createElement("button");
  removeItem.classList.add("btn");
  removeItem.textContent = "Delete";
  removeItem.addEventListener("click", () => removeItem.parentElement.remove());

  item.appendChild(itemDone);
  item.appendChild(removeItem);
}
