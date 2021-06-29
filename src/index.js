// projects page ( make one default)

// page for each project (create modules like restaurant page)

// each project contains list of objects (to do items)

// each item has title, description, due date, priority (and potentially others e.g. assign to person, set recurring)

// UI - be able to view all projects, view all todos in each project, expand single todo to see details, delete todo
import navbar from "./navbar.js";
import home from "./home.js";
import createForm from "./settings.js";
import addItem from "./addItem.js";
import closeForm from "./addItem.js";

createForm();

document.getElementById("home").addEventListener("click", () => {
  home();
});
document.getElementById("settings").addEventListener("click", () => {
  showForm();
});
document.getElementById("addItem").addEventListener("click", () => {
  addItem();
});

function showForm() {
  document.getElementById("myForm").style.display = "block";
}
