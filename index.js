console.log("hello");
//convert temp button and function
document.getElementById("convert").onclick = tempConvert;

//clear form button and function
document.getElementById("clear").onclick = clearForm;

function clearForm() {
  document.getElementById("farenheit").value = "";
  document.getElementById("celsius").value = "";
}
