// canvas
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width=1000;
canvas.height =500;

// backround
const background = new Image();
background.src ='img/background.jpg';

// land
const land = new Image();
land.src = 'img/land.png';

// player
let player = new Image();
player.src = 'img/player.png';

// gun
let gun = new Image();
gun.src = 'img/gun.png';


// player move
let firstXPosition = 800;

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
          firstXPosition = firstXPosition-10;
          console.log('lavo');
          break;
      case 38:
          console.log('hore');
          break;
      case 39:
          firstXPosition = firstXPosition+10;
          console.log('pravo');
          break;
      case 40:
          console.log('dole');
          gun.style.transform = "rotate(-200deg)";
          break;
  }
});




// render 
function game(){
  ctx.drawImage(background,0,0,canvas.width,canvas.height);
  ctx.drawImage(land,0,300,canvas.width,200);
  ctx.drawImage(player,firstXPosition,420,70,70);
  ctx.drawImage(gun,firstXPosition-15,445,70,45);
}


setInterval(game,1000/60);

