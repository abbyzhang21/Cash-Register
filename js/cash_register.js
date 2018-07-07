var cashRegister = 0;
//clear 
clear.addEventListener('click', clearIt);
function clearIt(){
    display.innerHTML = null;
    num1 = '';
    num2 = '';
    operator = '';
}

//deposit 
dCash.addEventListener('click', deposit);
function deposit(){
    cashRegister += parseInt(display.innerHTML);
    display.innerHTML = null;
    console.log(cashRegister);
}

//withdraw
wCash.addEventListener('click', withdraw);
function withdraw(){
    cashRegister -= parseInt(display.innerHTML);
    display.innerHTML = null;
    console.log(cashRegister);
}
//get balance 
getBal.addEventListener('click', balance);
function balance(){
    return display.innerHTML = cashRegister;
}
console.log(cashRegister);