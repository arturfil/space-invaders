var screen, input, frames;
var alSprite, taSprite, ciSprite;
var aliens, dir, tank, bullets, cities;

function main () {
  screen = new Screen(510, 600);
  input = new InputHandler();

  var img = new Image();
  img.addEventListener("load", function() {
    alSprite = [
      [new Sprite(this, 0,0,22,16), new Sprite(this, 0,16,22,16)],
      [new Sprite(this, 22, 0, 16,16), new Sprite(this, 22, 16, 16,16)],
      [new Sprite(this, 38,0,24,16), new Sprite(this, 38,16,24,16)],
    ];
    taSprite = new Sprite(this, 62, 0, 20, 16);
    ciSprite = new Sprite(this);

    init();
    run();
  });
  img.src = "res/invaders.png"
}

function init() {

}

function run() {
  var loop = function() {
    update();
    render();

    window.requestAnimationFrame(loop, screen.canvas);
  }
  window.requestAnimationFrame(loop, screen.canvas);
}

function update() {

}

function render() {
  screen.drawSprite(alSprite[0][0], 10, 10);
}

main();