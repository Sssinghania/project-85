var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_x = 25;
var rover_y = 320;
var rover_width = 80;
var rover_height = 170;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "https://i.imgur.com/NuT1lGU.jpg";
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "https://i.imgur.com/CrUtkQm.png";
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
}

function up() 
{
    if (rover_y >= 0) 
    {
        rover_y -= 10;
        uploadBackground();
        uploadrover();
    }
}

function down() 
{
    if (rover_y <= 500) 
    {
        rover_y += 10;
        uploadBackground();
        uploadrover();
    }
}

function left() 
{
    if (rover_x >= 0) 
    {
        rover_x -= 10;
        uploadBackground();
        uploadrover();
    }
}

function right() 
{
    if (rover_x <= 700) 
    {
        rover_x += 10;
        uploadBackground();
        uploadrover();
    }
}