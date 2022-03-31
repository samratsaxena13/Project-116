noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/3rvycZL1/moustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model initialised!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X Coordinate: " + noseX);
        console.log("Nose Y Coordinate: " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-40, noseY-30, 80, 90);
}


function take_snapshot() {
    save('moustache.png');
}