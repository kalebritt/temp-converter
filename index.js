console.log("hello");
//convert temp button and function

document.getElementById('convert').onclick === tempConvert();
document.getElementById('clear') === clearForm();

function tempConvert() {
    var farenheit = document.getElementById('farenheit').value;
    var celcius = document.getElementById('celcius').value;

    if (farenheit != '') {
        celcius = (parseFloat(farenheit) - 32) / 1.8;
          
    } else {
        farenheit = (parseFloat(celcius) * 1.8) + 32;
    }
     
    document.getElementById('farenheit').value = parseFloat(farenheit).toFixed(1);
    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
};

function clearForm() {
    document.getElementById('farenheit').value = '';
    document.getElementById('celcius').value = '';
    
};