function calculateTip() {
  var amount = parseInt(document.getElementById("question").value);
  var tip = amount * .2;
  var total = amount + tip;
  document.getElementById("answer").innerHTML = "Your total is $" + total.toFixed(2);
}
