let displayText = "";

function buttonClicked(value) {
  displayText += value;
  showDisplay();
}
function buttonClear() {
  document.getElementById("display").value = "";
  displayText = "";
}
function buttonDeleat() {
  displayText = displayText.slice(0, -1);
  showDisplay();
}
function buttonEqual() {
  try {
    let result = eval(displayText);
    displayText = result;
    console.log(displayText);
    showDisplay();
  } catch (error) {
    let display = document.getElementById("display");
    displayText = ""
    display.value = "Math Error";
    display.style.color = "red";
    display.style.textAlign = "center";
  }
}
function showDisplay() {
  let display = document.getElementById("display");
  display.style.textAlign = "start";
  display.style.color = "black";
  display.value = displayText;
}
