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
    ciSprite = new Sprite(this, 84, 8, 36, 24);

    init();
    run();
  });
  img.src = "res/invaders.png"
}

function init() {
  frames = 0;
  aliens = [];
  var rows = [1, 0, 0, 2, 2];
  for (var i = 0, len =rows.length; i < len; i++) {
    for (var j = 0; j < 10; j++) {
      var a = rows[i];
      aliens.push({
        sprite: alSprite[a],
        x: 30 + j*30 + [0, 4, 0][a],
        y: 30 + i*30, 
        w: alSprite[a][0].w,
        h: alSprite[a][0].h
      })
    }
  }
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
  for (var i = 0, len = aliens.length; i< len; i++) {
    var a = aliens[i];
    screen.drawSprite(a.sprite[0], a.x, a.y)
  }
}

main();