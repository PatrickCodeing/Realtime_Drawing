nosex = 0;
nosey = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,130);

    pose = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function draw(){
    background('grey');
    fill('blue');
    stroke('blue');
    square(nosex, nosey, difference);
    document.getElementById("square_sides").innerHTML = "Side of the square is: "+difference+" px";
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX  = "+ nosex +"noseY  = "+ nosey);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("leftWristX = "+ leftWrist +"rightWristX = "+ rightWrist +"difference = "+ difference);
    }
}