var one1=document.getElementById("1");
var two2=document.getElementById("2");
var three3=document.getElementById("3");
var four4=document.getElementById("4");
var five5=document.getElementById("5");
var six6=document.getElementById("6");
var seven7=document.getElementById("7");
var eight8=document.getElementById("8");
var nine9=document.getElementById("9");
var plus=document.getElementById("+");
var min=document.getElementById("-");
var mul=document.getElementById("*");
var div=document.getElementById("/");
var clear = document.getElementById("cl");
var dil = document.getElementById("d");
var equ= document.getElementById("=");

var pop=0;
var e1 =document.getElementById("dis")
 
function one_1(){
    pop=0;
    console.log(pop);
}
function two_2(){
    pop=0;
}
function three_3(){
    pop=0;
}
function four_4(){
    pop=0;
}
function five_5(){
    pop=0;
}
function six_6(){
    pop=0;
}
function seven_7(){
    pop=0;
}
function eight_8(){
    pop=0;
}
function nine_9(){
    pop=0;
}

function plus_5(){
    pop++;
    console.log(pop);
    if (pop > 1){
        alert("invalid input");
        e1.value ="";
        
    }
}


function del(){
    pop++;
    console.log(pop);
    if (pop > 1){
        alert("invalid input");
        e1.value ="";
        
    }
}
function min_3(){
    pop++;
    console.log(pop);
    if (pop > 1){
        alert("invalid input");
        e1.value ="";
        
    }
}
function mul_1(){
    pop++;
    console.log(pop);
    if (pop > 1){
        alert("asd");
        e1.value ="";
        
    }
}


function div_2(){
    pop++;
    console.log(pop);
    if (pop > 1){
        alert("asd");
        e1.value ="";
        
    }
}


function cl_all(){
    e1.value ="";
    pop=0;   
}


// function equal_all(){
    // pop++;
    // document.write("      <p>**please click on clear after your calulation is completed</p>")
    // if (pop > 1){
    //     alert("asd invalid equal    ");
    //     e1.value ="";
        
    // }
    // if (e1 = Text){
    //     alert("asd"
    // }
  
// }
d.addEventListener('click',del);
one1.addEventListener('click',one_1);
two2.addEventListener('click',two_2)
three3.addEventListener('click',three_3)
four4.addEventListener('click',four_4)
five5.addEventListener('click',five_5)
six6.addEventListener('click',six_6)
seven7.addEventListener('click',seven_7)
eight8.addEventListener('click',eight_8)
nine9.addEventListener('click',nine_9)
plus.addEventListener('click',plus_5)
min.addEventListener('click',min_3)
mul.addEventListener('click',mul_1)
div.addEventListener('click',div_2)
clear.addEventListener('click',cl_all)
// equ.addEventListener('click',equal_all)