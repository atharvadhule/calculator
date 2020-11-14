var e1 =document.getElementById("dis")
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
var aa= document.getElementById("=");

var pop=0;

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



// THIS CODE IS OF DARK MODE //

function qqq(){
    calc.disp.value=eval(calc.disp.value)
    // console.log("asd")
    if(e1.value=undefined){
        document.getElementById("disp").innerText="INVALID INPUT"
    }
}


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



const changeMode1=()=>{
    let circle=document.getElementById("circle");
    let swi=document.getElementById("swi");
    let body=document.getElementsByTagName("body");
    console.log("in");
    if(circle.style.marginLeft==="50px"){
        swi.style.backgroundColor="lightblue";
        circle.style.marginLeft="0px";
        body[0].style.backgroundColor="white";
        var c = document.getElementById("bt").childNodes;
    c[7].style.boxShadow="10px 5px 10px gray";
    c[15].style.boxShadow="10px 5px 10px gray";
    c[23].style.boxShadow="10px 5px 10px gray";
    c[31].style.boxShadow="10px 5px 10px gray";
    document.getElementById("dis").style.boxShadow="10px 5px 10px gray"
    document.getElementById("1").style.boxShadow="10px 5px 10px gray"
    document.getElementById("2").style.boxShadow="10px 5px 10px gray"
    document.getElementById("3").style.boxShadow="10px 5px 10px gray"
    document.getElementById("4").style.boxShadow="10px 5px 10px gray"
    document.getElementById("5").style.boxShadow="10px 5px 10px gray"
    document.getElementById("6").style.boxShadow="10px 5px 10px gray"
    document.getElementById("7").style.boxShadow="10px 5px 10px gray"
    document.getElementById("8").style.boxShadow="10px 5px 10px gray"
    document.getElementById("9").style.boxShadow="10px 5px 10px gray"
    document.getElementById("0").style.boxShadow="10px 5px 10px gray"
    document.getElementById("d").style.boxShadow="10px 5px 10px gray"
    document.getElementById("cl").style.boxShadow="10px 5px 10px gray"
    document.getElementById("=").style.boxShadow="10px 5px 10px gray"
    document.getElementById("=").style.backgroundColor="rgb(0, 140, 255)"
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("a").style.backgroundColor="lightblue";
    document.getElementById("a").style.boxShadow="20px 20px 20px grey"
    // document.getElementById("dar").style.boxShadow="none"
    document.getElementById("head").style.color="blue"
        
    document.getElementById("pro").style.backgroundColor="black";
    document.getElementById("by").style.color="black";
    document.getElementById("me").style.color="blue";
    document.getElementById("ni").style.color="white"
    }
    else{
    circle.style.marginLeft="50px";
        swi.style.backgroundColor="white";
        body[0].style.backgroundColor="black";
        document.getElementById("sun").style.color="white"

        var c = document.getElementById("bt").childNodes;
        c[7].style.boxShadow="none";
        c[15].style.boxShadow="none";
        c[23].style.boxShadow="none";
        c[31].style.boxShadow="none";
        document.getElementById("dis").style.boxShadow="5px 5px 20px gray"
        document.getElementById("1").style.boxShadow="5px 5px 20px gray"
        document.getElementById("2").style.boxShadow="5px 5px 20px gray"
        document.getElementById("3").style.boxShadow="5px 5px 20px gray"
        document.getElementById("4").style.boxShadow="5px 5px 20px gray"
        document.getElementById("5").style.boxShadow="5px 5px 20px gray"
        document.getElementById("6").style.boxShadow="5px 5px 20px gray"
        document.getElementById("7").style.boxShadow="5px 5px 20px gray"
        document.getElementById("8").style.boxShadow="5px 5px 20px gray"
        document.getElementById("9").style.boxShadow="5px 5px 20px gray"
        document.getElementById("0").style.boxShadow="5px 5px 20px gray"
        document.getElementById("d").style.boxShadow="5px 5px 20px gray"
        document.getElementById("cl").style.boxShadow="5px 5px 20px gray"
        document.getElementById("=").style.boxShadow="none"
        document.getElementById("=").style.backgroundColor=" rgb(119, 189, 255)"
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("a").style.backgroundColor="rgb(35, 37, 37)";
        document.getElementById("a").style.boxShadow="0px 5px 50px 0px rgb(184, 184, 184)"
        document.getElementById("pro").style.backgroundColor="white";
        document.getElementById("by").style.color="white";
        document.getElementById("me").style.color="rgb(130, 197, 252)";
        document.getElementById("head").style.color="white"
    }
}
