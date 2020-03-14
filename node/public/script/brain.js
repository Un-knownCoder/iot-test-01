let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotNewPose);
}

function draw() {
    image(video, 0, 0);
    if (!!pose) {
        let temp = {...pose};
        delete temp.keypoints;
        delete temp.score;

        for (let k in temp) {
            if (temp[k].confidence > 0.65) {
                fill(255, 100, 255);
                ellipse(temp[k].x, temp[k].y, 10);
            }
        }
    }

    if (!!skeleton) {
        for (let sk of skeleton) {
            let a = sk[0];
            let b = sk[1];
            strokeWeight(2);
            stroke(255);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }
}


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


function gotNewPose(p) {
    // console.log(p);
    if (p.length > 0) {
        pose     = p[0].pose;
        skeleton = p[0].skeleton;
    }
}

function modelLoaded() {
    console.log("%c ml5 model loaded ", "color: green")
}