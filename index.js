console.log("hello");
//convert temp button and function
document.getElementById("convert").onclick = tempConvert;

function tempConvert() {
  if (farenheit != "") {
    celcius = (parseFloat(farenheit) - 32) / 1.8;
  } else {
    farenheit = parseFloat(celcius) * 1.8 + 32;
  }
}

//clear form button and function
document.getElementById("clear").onclick = clearForm;

function clearForm() {
  document.getElementById("farenheit").value = "";
  document.getElementById("celsius").value = "";
}
