export default function showAddItemForm() {
  let style = document.getElementById("addItemForm").style.display;
  "block" == style ? (style = "none") : (style = "block");
  document.getElementById("addItemForm").style.display = style;
}

const input = document.getElementById("item");
const addItemForm = document.getElementById("addItemForm");
const itemCancel = document.getElementById("itemCancel");
const itemSubmit = document.getElementById("itemSubmit");

addItemForm.addEventListener("submit", submitInfo);

function submitInfo(e) {
  e.preventDefault();
  createElement(input.value);
  input.value = "";
}

itemCancel.addEventListener(
  "click",
  () => (addItemForm.style.display = "none")
);

const createElement = (text) => {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.classList.add("listItem");
  document.getElementById("list").appendChild(listItem);
  addButtons(listItem);
};

function addButtons(item) {
  const itemDone = document.createElement("i");
  itemDone.classList.add("fas", "fa-check", "itemIcon");
  itemDone.addEventListener(
    "click",
    () => (itemDone.parentElement.style.textDecoration = "line-through")
  );

  const removeItem = document.createElement("i");
  removeItem.classList.add("far", "fa-trash-alt", "itemIcon");
  removeItem.addEventListener("click", () => removeItem.parentElement.remove());

  item.appendChild(itemDone);
  item.appendChild(removeItem);
}
