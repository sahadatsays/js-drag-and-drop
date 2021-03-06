const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// loop through empty 
for(let empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

// Drag Events 
function dragOver (e) {
    e.preventDefault();
}
function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave () {
    this.className = 'empty';
}
function dragDrop (e) {
   e.preventDefault();
   this.className = 'empty';
   this.append(fill);
}


// add events
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// drag functions
function dragStart () {
    this.className += " hold";
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}