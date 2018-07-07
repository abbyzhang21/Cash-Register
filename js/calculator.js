//set variables
var num1 = '';
var num2 = '';

var operator = '';

//calculator function and show on display
var btnValue = document.getElementsByClassName('btn');
    for(var i = 0; i < btnValue.length; i++){
        btnValue[i].addEventListener('click', displayIt);
        function displayIt(){
            display.innerHTML += this.innerHTML;
            if(this.innerHTML === '/' ||this.innerHTML === '*' || this.innerHTML === '+'|| this.innerHTML === '-'){
                operator += this.innerHTML; 
            }else if(operator.length === 0){
                num1 += this.innerHTML;
            }else{
                num2 += this.innerHTML;
            }
        }
        
    }
    console.log(num1);
//do the math
equal.addEventListener('click', getResult);
function getResult(){
    var toNum1 = parseFloat(num1);
    var toNum2 = parseFloat(num2);
         switch(operator){
            case '/':
            display.innerHTML = toNum1/toNum2;
            break;
            case '*':
            display.innerHTML = toNum1*toNum2;
            break;
            case '-':
            display.innerHTML = toNum1-toNum2;
            break;
            case '+':
            display.innerHTML = toNum1+toNum2;
            break;
            default:
            display.innerHTML = 'Try Again!';
         }
}


       