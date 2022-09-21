console.log("hello");
//convert temp button and function

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear') = clearForm;

function tempConvert() {
    const farenheit = document.getElementById('farenheit').value;
    const celcius = document.getElementById('celcius').value;

    if (farenheit != '') {
        celcius = (parseFloat(farenheit) - 32) / 1.8;
          
    } else {
        farenheit = (parseFloat(celcius) * 1.8) + 32;
    }
    
}