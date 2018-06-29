//calculator function and show on display
var btnValue = document.getElementsByClassName('btn');

    //console.log(btnValue[i].innerHTML);
    for(var i = 0; i < btnValue.length; i++){
        btnValue[i].addEventListener('click', displayIt);
    function displayIt(){
        if(this.innerHTML === '='){
           display.innerHTML = eval(display.innerHTML);
        }else{
            display.innerHTML += this.innerHTML;
            return display.innerHTML;
        }
    }

}