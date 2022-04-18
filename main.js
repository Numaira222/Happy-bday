function preload() {

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(110.250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}

function draw() {
    image(video, 0, 0, 400, 450);
    tint(tint_colour);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);

}





function take_snapshot() {
    save("Numaira.png");
}

function filter_tint() {
    tint_colour = document.getElementById("colour_name").value;
}
