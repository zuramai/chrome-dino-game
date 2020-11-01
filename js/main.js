const canvas = document.getElementById('canvas');

let dino = new  Dino(canvas, {
    maxWidth: 720
});
dino.init();
dino.render();