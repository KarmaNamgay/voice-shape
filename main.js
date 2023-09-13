var speech_recog=window.webkitSpeechRecognition;
var recognition=new speech_recog();
var x=0;
var y=0;
var draw_circle="";
var draw_rect="";
function setup(){
    canvas=createCanvas(900,600);

}
function preload(){

}
function draw(){
    if(draw_circle=="yes"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="status circle is drawn"
        draw_circle="";
    }    
    if(draw_rect=="yes"){
        rect(x,y,70,60);
        document.getElementById("status").innerHTML="status rectangle is drawn";
        draw_rect="";
    }
}

function start_1(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}    
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as: "+content;
    if(content=="Circle" || content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="circle drawn";
        draw_circle="yes";
    }
    if(content=="Rectangle" || content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="rectangle drawn";
        draw_rect="yes";
    }
}