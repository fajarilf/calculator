function ins(val){
    const inputValue = document.getElementById("display");
    const operator = ['+', '-', '/', '.', '*', '%'];
    const lastChar = inputValue.value.slice(-1);
    var newText = inputValue.value + val;

    if(operator.includes(val) && operator.includes(lastChar)){
        return;
    }
    else{
        inputValue.value = newText;
    }
}

function percent(){
    var a = document.getElementById("display").value
    var b = a/100;
    document.getElementById("display").value = b;
}

function solve(){
    var x = document.getElementById("display").value
    var y = eval(x)
    document.getElementById("display").value = y;
}