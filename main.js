var canvas = new fabric.Canvas('minecraft');

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_img = "";
var block_img = "";

function player_update(){

    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;

        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({top:player_y, left:player_x});

        canvas.add(player_img);
    });
    
}

function block_update(get_Img){

    fabric.Image.fromURL(get_Img, function(Img){
        block_img = Img;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({top:player_y, left:player_x});

        canvas.add(block_img);
    });
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80'){
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById('current_width').innerHTML=block_width;
    document.getElementById('current_height').innerHTML=block_height;
    }

    if(e.shiftKey == true && keyPressed =='77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById('current_width').innerHTML=block_width;
        document.getElementById('current_height').innerHTML=block_height;
    }
    
    if(keyPressed == "37"){
        left();
    }

    if(keyPressed == "38"){
        up();
    }

    if(keyPressed == "39"){
        right();
    }
    
    if(keyPressed == "40"){
        down();
    }

    if(keyPressed == '67'){
        block_update("cloud.jpg");
        console.log('c');
    }

    if(keyPressed == '68'){
        block_update("dark_green.png");
        console.log('d')
    }

    if(keyPressed == '71'){
        block_update("ground.png");
        console.log('g');
    }

    if(keyPressed == '76'){
        block_update("light_green.png");
        console.log('l');
    }

    if(keyPressed == '82'){
        block_update("roof.jpg");
        console.log('r');
    }
    
    if(keyPressed == '84'){
        block_update("trunk.jpg");
        console.log('t');
    }

    if(keyPressed == '85'){
        block_update("unique.png");
        console.log('u');
    }

    if(keyPressed == '87'){
        block_update("wall.jpg");
        console.log('w');
    }

    if(keyPressed == '89'){
        block_update('yellow_wall.png');
        console.log('y');
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_width;
        canvas.remove(player_img);
        player_update()
    }
}

function right(){
    if(player_x <= 650){
        player_x = player_x + block_width;
        canvas.remove(player_img);
        player_update();
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_img);
        player_update();
    }
}

function down(){
    if(player_y <=460){
        player_y = player_y + block_height;
        canvas.remove(player_img);
        player_update();
    }
}

function clearCanvas(){
    clearRect(0,0,800,600);
}


