function add (x, y) {
	return x+y;
}
function subtract (x, y) {
	return x-y;
}
function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}
function multiply (array) {
	return array.reduce((total, current) => total * current, 1);
}

function operate(result, term, operator){
    switch(operator){
        case '+' :
            return add(result, term);
        case '-':
            return subtract(result, term);
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

const number = Array.from(document.querySelectorAll('.number'));
number.forEach((n) => {
    n.addEventListener('click', (e)=>{
        strnum += e.target.innerHTML;
        operation.innerHTML = strnum;

        operators.forEach(o => {
            o.style.setProperty('background', '#9ca1a4');
        })
    });
})

const operators = Array.from(document.querySelectorAll('#operators button'));
operators.forEach((o) => {
    o.addEventListener('click', (e)=>{
        o.style.setProperty('background', '#ccc');

        term = Number(strnum);
        if(!operator){
            result = term;
        }else{
            result = operate(result, term, operator)
        }
        operator = e.target.innerHTML;
        strnum = "";
        resultHTML.innerHTML = result;
        console.log(result);
    });
})

const equals = Array.from(document.querySelectorAll('#eq'));
equals.forEach((eq) => {
    eq.addEventListener('click', (e)=>{
        //TODO
    });
})