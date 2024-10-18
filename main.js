function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  document.getElementById("result").value += operator;
}

function calculate() {
  try {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}
