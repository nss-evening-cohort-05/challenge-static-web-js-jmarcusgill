// Grab and declare HTML elements
var treeHeight = document.getElementById("height")
var treeCharacter = document.getElementById("character")
var growButton = document.getElementById("growIt")




// Event Listener for button
growButton.addEventListener("click", validation);

//Event Listener for EnterKey
window.addEventListener("keypress", checkEnter);

//Function for the keypress
function checkEnter (e) {
  if (e.keyCode === 13) {
    validation();
  }
};

//Validation Function that checks to see if both inputs are filled and plugs info into myTree object
function validation() {
  var myTree = {
    height: treeHeight.value,
    character: treeCharacter.value
  };
  if (myTree.height === "" || myTree.character === "") {
    alert("Please fill out the information");
  } else {
    console.log("Here Be Ye Tree!")
    makeTreeGrow(myTree);
  }
};

//Function that makes tree grow
function makeTreeGrow(myTree) {
  for (var i = 0; i < myTree.height; i++) {
    var numOfChar = 2*i+1;
    var numOfSpace = (myTree.height-i);
    console.log(" ".repeat(numOfSpace), myTree.character.repeat(numOfChar));
  }
};