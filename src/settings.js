export default function createForm() {
  if (!document.getElementById("myForm")) {
    const formPopup = document.createElement("div");
    formPopup.classList.add("formPopup");
    formPopup.id = "myForm";
    document.getElementById("content").appendChild(formPopup);

    const form = document.createElement("form");
    form.classList.add("formContainer");
    form.action = "index.html";
    form.method = "post";
    formPopup.appendChild(form);

    const label = document.createElement("label");
    label.for = "color";
    label.textContent = "Color";
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = "color";
    input.name = "color";
    input.id = "color";
    let color = input.value;
    form.appendChild(input);

    const save = document.createElement("button");
    save.type = "button";
    save.id = "save";
    save.classList.add("btn");
    save.textContent = "Save";
    form.appendChild(save);

    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.class = "btn cancel";
    cancel.textContent = "Cancel";
    form.appendChild(cancel);

    save.addEventListener("click", submitInfo);
    cancel.addEventListener("click", closeForm);

    formPopup.style.display = "none";
    return formPopup;
  }
}

function submitInfo() {
  document.getElementById("navBarContainer").style.backgroundColor =
    color.value;
  closeForm();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
