function setup() {
    loadJSON('https://www.behance.net/v2/projects/?api_key=2X2KbdNdGiu8CUCPA5qCh3RW6di15qo6');
    createCanvas(200, 200);
}

function draw() {
    background(12,12,12);
    fill(20,50,100);
    ellipse(10,10,50);
}