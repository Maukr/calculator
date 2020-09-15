function add (x, y) {
	return x+y;
}
function subtract (x, y) {
	return x-y;
}
function multiply (x, y) {
	return x*y;
}
function divide (x, y) {
	return y == 0 ? "Math ERROR" : x/y;
}
function operate(result, term, operator){
    switch(operator){
        case '+' :
            return add(result, term);
        case '-':
            return subtract(result, term);
        case 'x':
            return multiply(result, term);
        case '/':
            return divide(result, term);
        default : 
            break;   
    }
}

let strnum = "";
let term;
let operator;
let result = 0;

const operation = document.querySelector('#operation');
const resultHTML = document.querySelector('#result');
resultHTML.innerHTML = 0;

const number = Array.from(document.querySelectorAll('.number'));
number.forEach((n) => {
    n.addEventListener('click', (e)=>{
        strnum += e.target.innerHTML;
        operation.innerHTML = strnum;

        operators.forEach(o => {
            o.style.setProperty('background', '#9ca1a4');
        })

        console.log(strnum, term, operator, result);
    });
})

const operators = Array.from(document.querySelectorAll('#operators button'));
operators.forEach((o) => {
    o.addEventListener('click', (e)=>{
        o.style.setProperty('background', '#ccc');

        if(isNaN(Number(strnum))){
            console.log(clearError(clearCalculator, 'Syntax Error'));
            resultHTML.innerHTML = clearError(clearCalculator, 'Syntax Error');
            return;
        }   

        term = Number(strnum);
        if(!operator){
            result = term;
        }else{
            result = operate(result, term, operator)
        }
        operator = e.target.innerHTML;
        strnum = "";
        resultHTML.innerHTML = result;
        negative.style.setProperty('background', '#9ca1a4');
    });
})

const equals = Array.from(document.querySelectorAll('#eq'));
equals.forEach((eq) => {
    eq.addEventListener('click', (e)=>{

        if(isNaN(Number(strnum))){
            console.log(clearError(clearCalculator, 'Syntax Error'));
            resultHTML.innerHTML = clearError(clearCalculator, 'Syntax Error');
            return;
        }   

        let res = operate(result, Number(strnum), operator)
        resultHTML.innerHTML = res === 'Math ERROR' ? clearError(clearCalculator, 'Math ERROR') : res;
        operation.innerHTML = '';
        strnum = '';
        negative.style.setProperty('background', '#9ca1a4');
    });
})

const ac = document.querySelector('#ac').addEventListener('click', e => {
    operators.forEach(o => {
        o.style.setProperty('background', '#9ca1a4');
    })
    clearCalculator();
});

const negative = document.querySelector('#negative');

negative.addEventListener('click', e => {
    if(strnum.includes('-')){
        strnum = strnum.substring(1);
        negative.style.setProperty('background', '#9ca1a4');
    }else{
        strnum = '-' + strnum;
        negative.style.setProperty('background', '#ccc');
    }
});

function clearCalculator(){
    strnum = "";
    term;
    operator;
    result = 0;
    resultHTML.innerHTML = 0;
    operation.innerHTML = '';
}

function clearError(errorFunc, res){
    setTimeout(function(){ 
        errorFunc();
    }, 1500);
    return res;
}
