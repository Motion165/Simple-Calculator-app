const diplay = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
 diplay.value = "";
}


function calculate(){
    try{
display.value = eval(diplay.value);
    }
    catch(error){
        diplay.value = "error"
    }
}