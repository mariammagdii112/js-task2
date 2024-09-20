

var counter=0
function plus(){
        counter++;
        document.getElementById('number').innerHTML=counter;
}
function minus(){
        counter--;
        document.getElementById('number').innerHTML=counter;
}
// /////
function convert(){
        var myInput = document.getElementById('myInput').value;
        var result = document.getElementById('result');

        if (isNaN(myInput)){
                result.innerHTML='Enter a Number';
                return false
        
        }else if (myInput<0){
                result.innerHTML='Enter a Positive Number';
                return false
        
        }else if (myInput==0){
                result.innerHTML='Enter a Number Rather than 0';
                return false
        
        }else{
                result.innerHTML= myInput *50 + 'EGP';
                return false
        }
}
