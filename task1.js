const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let op = "";
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && op !== "") {
    op = eval(op.replace("%", "/100"));
  } 
  else if (btnValue === "DEL") {
    op = op.toString().slice(0, -1);
  }
  else if (btnValue === "AC") {
    op = "";
  }  
  else {
    if (op === "" && specialChars.includes(btnValue)) return;
    op += btnValue;
  }
  display.value = op;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
