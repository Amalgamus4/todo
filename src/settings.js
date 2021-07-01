export default function showSettingsForm() {
  let style = document.getElementById("settingsForm").style.display;
  "block" == style ? (style = "none") : (style = "block");
  document.getElementById("settingsForm").style.display = style;
}

document.getElementById("settingsSave").addEventListener("click", saveSettings);
document
  .getElementById("settingsCancel")
  .addEventListener("click", closeSettingsForm);

function saveSettings() {
  const color = document.getElementById("color");
  let input = color.value;
  document.getElementById("navBarContainer").style.backgroundColor = input;
  closeSettingsForm();
}

function closeSettingsForm() {
  document.getElementById("settingsForm").style.display = "none";
}
