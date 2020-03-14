(async function () {
    const net = await posenet.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        inputResolution: { width: 640, height: 480 },
        multiplier: 0.75
    });
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let video = document.getElementById('video');

    let vendor = window.URL;
    console.log(window.URL || window.webkitURL);

    navigator.getMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        video.srcObject = stream;
        video.play();
    }, function (err) {
        console.warn("Error [%s]", err.code);
    });

    video.addEventListener('play', function () {
        draw(this, ctx);
    });

    async function draw(video, ctx) {
        ctx.drawImage(video, 0, 0, 640, 480);
        console.table(video)
        // console.assert(!!net);
        try {
            const pose = await net.estimateSinglePose(video, {
                flipHorizontal: false
            });
            // ctx.fillStyle = 'red';
            // ctx.beginPath();
            // ctx.ellipse(Math.round(pose.keypoints[0].position.x), Math.round(pose.keypoints[0].position.y), 10, 10);
            // ctx.fill();
            
            // console.log(pose)
            for (let e of pose.keypoints) {
                if (e.score > 0.7) {
                    ctx.fillStyle = 'red';
                    ctx.beginPath();
                    ctx.ellipse(Math.round(e.position.x), Math.round(e.position.y), 7, 7, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
                }
            }

        } catch (e) {
            console.warn("Error", e);
            setTimeout(draw, 0, video, ctx);
        }
        
    }
})();