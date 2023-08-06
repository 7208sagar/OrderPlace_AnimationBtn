let currentInput = '';
let current_operator = '';
let pre_inp = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function allOperator(operator) {
    if (currentInput === '') return;
    if (pre_inp !== '') {
        calculation();
        // console.log(allOperator)
    }
    current_operator = operator;
    pre_inp = currentInput;
    currentInput = '';
}
function calculation() {
    if (pre_inp === '' || currentInput === '') return;
    const first_num = parseFloat(pre_inp);
    const second_num = parseFloat(currentInput);
    let result = 0;
    switch (current_operator) {
        case '+':
            result = first_num + second_num;
            break;
            case '-':
            result = first_num - second_num;
            break;
            case '*':
            result = first_num * second_num;
            break;
            case '/':
            result = first_num / second_num;
            break;
            case '':
            

    }

    currentInput=result.toString();
    pre_inp='';
    current_operator='';
    updateDisplay();
}
function clearResult(){
currentInput ='';
current_operator='';
pre_inp='';
updateDisplay();
}


function updateDisplay(){
  document.getElementById('result').value=currentInput;
}

