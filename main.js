// Display the digit and operator
function display(val){

    document.getElementById('result').value += val; 

    return val;

};

// To Solve the Expression
function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
};

// To Clear the Screen
function clearScreen(){
    let x = document.getElementById('result').value= "";
    
}














































// const number = document.querySelector(".number").value;
// const symbol = document.querySelector(".symbol").value;
// const equal = document.querySelector(".equal").value;
// const clear = document.querySelector(".clear").value;
// const result = document.querySelector("#result").value;
