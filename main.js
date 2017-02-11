// Grab and declare HTML elements
var treeHeight = document.getElementById("height")
var treeCharacter = document.getElementById("character")
var growButton = document.getElementById("growIt")

// Event Listener for button
growButton.addEventListener("click", validation)

// If Enter Key pressed, run validation function
document.addEventListener("keydown", function (e) {
  if (e.keycode === "13") {
    validation();
  }
});

validation();
