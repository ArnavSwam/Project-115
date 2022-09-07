function preload()
{

}

function setup()
{
    canvas = createCanvas(650, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(650, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 650, 500);
}

function take_snapshot()
{
    save('myFilterimage.png')
}

function modelLoaded()
{
    console.log('Hello there! your model is loadedd');
}