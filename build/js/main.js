var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.getElementById('game').appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

var texture = PIXI.Texture.fromImage('./img/bunny.png');

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
    var bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
}

// Center on the screen
container.x = (app.renderer.width - container.width) / 2;
container.y = (app.renderer.height - container.height) / 2;

app.ticker.add(function(delta) {
    // rotate the container!
    // use delta to create frame-independent tranform
    // container.rotation -= 0.01 / delta;
});

var sprite = bunny;
