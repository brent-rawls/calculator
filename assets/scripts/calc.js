var screenValue = 0;
var memValue = 0;
var typingValue = 0;
var operator = 0;
var lastPressedEquals = false;

function pressClear(){
    screenValue = 0;
    memValue = 0;
    typingValue = 0;
    operator = 1;
    lastPressedEquals = false;
    updateScreen();
}

function updateScreen(){
    document.getElementById("calc_display").innerHTML = screenValue;
}

function pressDigit(d){
    if(lastPressedEquals) typingValue = 0;
    typingValue = typingValue * 10 + d;
    screenValue = typingValue;
    lastPressedEquals = false;
    updateScreen();
}

function pressOperator(op){
    //1 plus, 2 minus, 3 multiply, 4 divide
    operator = op;
    if (!lastPressedEquals) memValue = typingValue;
    typingValue = 0;
    lastPressedEquals = false;
    //pressEquals();
}

function pressEquals(){
    //if(lastPressedEquals == false) typingValue = screenValue;
    //1 plus, 2 minus, 3 multiply, 4 divide
    if(operator == 1){
        memValue = memValue + typingValue;
    }
    else if(operator == 2){
        memValue = memValue - typingValue;
    }
    else if(operator == 3){
        memValue = memValue * typingValue;
    }
    else if(operator == 4){
        memValue = memValue / typingValue;
    }
    else{
        pressClear(); //a mistake happened!
    }
    screenValue = memValue;
    lastPressedEquals = true;
    updateScreen();

}