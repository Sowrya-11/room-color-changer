function preload(){

}

function setup(){
    var canvas=createCanvas(640,480);
    canvas.position(100,250);
   video=createCapture(VIDEO);
   video.hide();
   tint_color="";
   
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}

function dofi(){
    tint_color=document.getElementById("color_name").value;
}

function take_snapshot(){
save('My_room.png')
}

function reset(){
    tint_color="white";
}