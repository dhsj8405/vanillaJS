const fill = document.querySelector(".fill");
const emptyList = document.querySelectorAll(".empty");
const DRAGGED = "dragged";
const HOVERED = "hovered";

//
function handlingDragStart() {
  this.classList.toggle(DRAGGED);
}
function handlingDragEnd() {
  this.classList.toggle(DRAGGED);
}

fill.addEventListener("dragstart", handlingDragStart);
fill.addEventListener("dragend", handlingDragEnd);

function handlingDragEnter(event) {
  this.classList.toggle(HOVERED);
}

function handlingDragLeave(event) {
  this.classList.toggle(HOVERED);
}

function handlingDrop(event) {
  this.append(fill);
  this.classList.toggle(HOVERED);
}

function handlingDragOver(event) {
  event.preventDefault();
}

for (const empty of emptyList) {
  empty.addEventListener("dragenter", handlingDragEnter);
  empty.addEventListener("dragleave", handlingDragLeave);
  empty.addEventListener("dragover", handlingDragOver);
  empty.addEventListener("drop", handlingDrop);
}
