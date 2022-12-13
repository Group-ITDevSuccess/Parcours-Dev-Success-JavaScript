window.addEventListener('load', function () {
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");

    function draw(angle) {
        context.save();
        context.clearRect(0,0,150,150);
        context.translate(75,75);

        context.fillStyle = "teal";
        context.rotate((Math.PI/180)*(45+angle));
        context.fillRect(0,0,50,50);

        context.fillStyle = "orange";
        context.rotate(Math.PI/2); // Rotation 90°
        context.fillRect(0,0,50,50);

        context.fillStyle = "teal";
        context.rotate(Math.PI/2);
        context.fillRect(0,0,50,50);

        context.fillStyle = "orange";
        context.rotate(Math.PI/2);
        context.fillRect(0,0,50,50);

        context.restore();

        angle = angle + 2;

        if (angle >= 360) angle = 0;

        window.requestAnimationFrame(function () {
            draw(angle);
        });
    }
    draw(0);
});
