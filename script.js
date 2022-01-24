const blackButton = document.querySelectorAll('#black-button');
const blueButton = document.querySelectorAll('#blue-button');
const whiteButton = document.querySelectorAll('#white-button');
const greenButton = document.querySelectorAll('#green-button');

const body = document.querySelector('body');

const black = "#191919";
const blue = "#2C3057";
const white = "#E6E6E6";
const green = "#064635";

const gradiantBox = document.getElementById('color-changer-gradiant');
const coordinatesContainer = document.querySelector('.coordinates-container');

const form = document.querySelector('.addColorButton');
const colorPickerContainer = document.querySelector('.color-picker-container');

const xAndYText = document.createElement('h2');

const deleteButton = document.querySelectorAll('.deleteButton');

xAndYText.innerText = "X: 0 Y: 0";

coordinatesContainer.appendChild(xAndYText); 

console.log(coordinatesContainer.value);

gradiantBox.addEventListener('mousemove', backgroundGradiantChanger)
gradiantBox.addEventListener('mousemove', showCoordinates)
form.addEventListener('submit', addButton)
for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener('click', deleteColorButton);
}

function backgroundGradiantChanger (e) {
  e.preventDefault();
  body.style.backgroundColor = "rgb("+e.offsetX+", 40, "+e.offsetY+")";
}

function changeBackgroundColor (buttonName, backgroundColor) {
  for (var i = 0; i < buttonName.length; i++) {
    buttonName[i].addEventListener("click", function(e) {
      e.preventDefault();
      body.style.background = backgroundColor;
    });
  }
}

function deleteColorButton (e) {
  e.preventDefault(); 
  var button = e.target.parentElement;
  colorPickerContainer.removeChild(button)
}

function showCoordinates (e) {
  e.preventDefault();
  xAndYText.innerText = "X: "+e.offsetX+" Y: "+e.offsetY+"";
}

function addButton (e, boxInnerText) {
  e.preventDefault();
  
  var newItem = document.getElementById('addColorButtonTextBox').value;
  var button = document.createElement('button');
  var deleteButton = document.createElement('button');
  var div = document.createElement('div');
  
  div.className = 'color-button-container';

  button.className = 'color-button';
  button.id = `${newItem}-button`;
  button.type = 'button';
  
  div.appendChild(button);
  button.appendChild(document.createTextNode(newItem));
  colorPickerContainer.appendChild(div);
  
  changeBackgroundColor(document.querySelectorAll(`#${newItem}-button`), `${newItem}`);

  deleteButton.className = 'deleteButton';
  deleteButton.appendChild(document.createTextNode('X'));
  div.appendChild(deleteButton);

  deleteButton.addEventListener('click', deleteColorButton);
}

changeBackgroundColor(blackButton, black);
changeBackgroundColor(blueButton, blue);
changeBackgroundColor(whiteButton, white);
changeBackgroundColor(greenButton, green);


