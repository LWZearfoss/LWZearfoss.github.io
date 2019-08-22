function calcValues() {
  var num1, num2, op, res;
  num1 = Number(document.formcalc.txtnum1.value);
  num2 = Number(document.formcalc.txtnum2.value);
  op = document.getElementById("operation");
  if (op.options[op.selectedIndex].value == "add") {
    res = num1 + num2;
  }
  if (op.options[op.selectedIndex].value == "subtract") {
    res = num1 - num2;
  }
  if (op.options[op.selectedIndex].value == "multiply") {
    res = num1 * num2;
  }
  if (op.options[op.selectedIndex].value == "divide") {
    res = num1 / num2;
  }
  document.formcalc.txtres.value = res;
}
