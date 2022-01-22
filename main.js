song="";
function preload()
{
    song = loadSound("Aarush.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(700, 300);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0,0,600,500);
}

function play1()
{
    song.play();
}