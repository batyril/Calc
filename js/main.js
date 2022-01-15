import {UI_ELEMETS} from "../js/view.js";

let valueA = '';
let valueB = '';
let operand = '';


UI_ELEMETS.CLEAR.addEventListener("click",function(){
    valueA = '';
    valueB = '';
    operand = '';   
    UI_ELEMETS.OUTPUT.textContent = '0'
})

UI_ELEMETS.CALCULATOR.onclick = function(event) {
    if(UI_ELEMETS.OUTPUT.textContent.length >= 4){
        UI_ELEMETS.OUTPUT.style.fontSize = "60px"
        if(UI_ELEMETS.OUTPUT.textContent.length >= 8){
            UI_ELEMETS.OUTPUT.style.fontSize = "40px"
        }
    }
    if(UI_ELEMETS.OUTPUT.textContent.length < 4){
        UI_ELEMETS.OUTPUT.style.fontSize = "80px"
    }
    let isButtons = event.target.textContent === 'C' || event.target.textContent === '=' || event.target.className === 'delete' || event.target.className === 'calculator_block' || event.target.className === 'row row-1' || event.target.className === 'row row-2' || event.target.className === 'row row-3' || event.target.className === 'row row-4'  || event.target.className === 'row row-5' || event.target.className === 'row row-6' || event.target.className === 'output' ;
    if(isButtons){
        return
    };
    
    if(UI_ELEMETS.OUTPUT.textContent ==='0'){
        UI_ELEMETS.OUTPUT.textContent = '';
        UI_ELEMETS.OUTPUT.textContent = event.target.textContent;
    }
    else{
        UI_ELEMETS.OUTPUT.textContent += event.target.textContent};}
    
    
    

UI_ELEMETS.DELETE.addEventListener("click",function(){

    if(UI_ELEMETS.OUTPUT.textContent.length >= 1){
        UI_ELEMETS.OUTPUT.textContent = UI_ELEMETS.OUTPUT.textContent.slice(0,-1)
    }

    if(UI_ELEMETS.OUTPUT.textContent ==="" || UI_ELEMETS.OUTPUT.textContent === "0" ){
        UI_ELEMETS.OUTPUT.textContent = '0';
        return
    }  
})

UI_ELEMETS.EQUALLY.addEventListener("click",function(){
    let sumA ='';
    let sumB ='';
    for (let char of  UI_ELEMETS.OUTPUT.textContent){

        if(char ==='÷' || char ==='×' || char ==='-'|| char ==='+'){
            operand = char 
            break
        }
        sumA += char 
    }
    valueA = +sumA
    for (let char of  UI_ELEMETS.OUTPUT.textContent.split('').reverse().join('')){
        if(char ==='÷' || char ==='×' || char ==='-'|| char ==='+'){
            break
        }
        sumB += char  

    }
    
    valueB = +sumB.split('').reverse().join('')
   
    calc(valueA,valueB, operand )

})



function calc(a, b, operator) {
    let result;
    console.log('+')
    const isNotValidOperand = ( typeof a != 'number' || typeof b != 'number' );
    
    if ( isNotValidOperand ) {
        result = "Error";
    } else if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b; 
    } else if (operator === "×") {
        result = a * b;
    } else if (operator === "÷") {
        if (b === 0) { 
            result = "Error!";
        } else {
            result =  a / b;
            result = result.toFixed(2)
        } 
    }  else {
        result = "unknown";
    }

    UI_ELEMETS.OUTPUT.textContent = result;
}







