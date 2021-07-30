let outputScreen = document.getElementById("txt__value");

function display(num){
    outputScreen.value += num;
}

function calculator(){
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert("Invalid values");
    }
}

function clr(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}