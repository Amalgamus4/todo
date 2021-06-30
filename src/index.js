// projects page ( make one default)

// page for each project (create modules like restaurant page)

// each project contains list of objects (to do items)

// each item has title, description, due date, priority (and potentially others e.g. assign to person, set recurring)

// UI - be able to view all projects, view all todos in each project, expand single todo to see details, delete todo
import home from "./home.js";
import showSettingsForm from "./settings.js";
import showAddItemForm from "./addItem.js";

document.getElementById("home").addEventListener("click", () => {
  home();
});
document.getElementById("addItem").addEventListener("click", () => {
  showAddItemForm();
});
document.getElementById("settings").addEventListener("click", () => {
  showSettingsForm();
});
