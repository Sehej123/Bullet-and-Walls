//Creating variables.
var wall, thickness;
var bullet,speed,weight;
var bulletRightEdge, wallLeftEdge;
var bulletWidth;
//This is function setup, here we create all objects(sprites), canvas, and assign something to the variables
// which are createed above.
function setup () {
  //Here we create a canvas.
    createCanvas(1600,400);
  //We are assigning a random number from 22 to 83 to the variable 'thickness'.
  thickness = random(22,83);
  //We are creating an object (sprite) which will be stored in the variable 'bullet'.
  bullet = createSprite(50,200,20,30);
  //We are assigning a colour to the variable 'bullet'.
  bullet.shapeColor = "white";
 
  //We are assigning an object (sprite) to the variable 'wall'.
  wall = createSprite(1200,200,60,thickness,height/2);
  //We are assigning a colour to the variable 'wall'.
  wall.shapeColor = color(80,80,80);

  //We are assigning a random number from 223 to 321 to the variable 'speed'.
  speed = random(223,321);
  //We are assigning a random number from 30 to 52 to the variable 'speed'.
  weight = random(30,52);
  //We are storing the X Axis Velocity of the bullet in the variable 'speed'.
  bullet.velocityX = speed;
  //We are storing the X Axis of the variable 'bullet' in the variable 'bulletRightEdge'.
  bulletRightEdge = bullet.x;
  //We are storing the X Axis of the variable 'wall' in the variable 'wallLeftEdge'.
  wallLeftEdge = wall.x;
  //We are storing the width of the variable 'bullet' in the variable 'bulletWidth'.
  bulletWidth = bullet.width;

}

//This is function draw, here we store all kinds of logic and also give background colour to the canvas.
function draw() {
  //Giving background colour as black.
  background(0,0,0);
  //Declaring the function 'Collide'.
    Collide();
    //This code is used to display all the objects(sprites) we created.
    drawSprites();
}
  //This is the function we created, here we are going to store the logic
  function Collide(bullet,wall) {
    //Here we are declaring the variable 'bulletRightEdge' is equal to the variable 'bulletRightEdge' plus
    // the variable 'bulletwidth'.
    bulletRightEdge=bulletRightEdge+bulletWidth;
    //Here we are writing if the the variable 'bulletRightEdge' is greater than variable 'wallLeftEdge'.
    if(bulletRightEdge>wallLeftEdge) {
      return true; 
    }
    return false;
    }
    // Here we are writing the code that if the function 'collide', bullet and wall.
    if(Collide(bullet,wall)) {
      // The variable 'bullet's X Axis's Velocity will be 0.
      bullet.velocityX = 0;
      // Here we are creating a varable called 'damage' is equal to '0.5 x weight x speed^3 / (thickness^3).
      var damage = 0.5*weight*speed*speed*speed/(thickness*thickness* thickness);
      //Here we are writing that if the damage is greater than ten,
      if(damage>10) {
        //The colour of the wall will change.
        wall.shapeColor = (255,0,0);
      }
      //Here we are writing the code that if the damage is less than ten,
      if(damage<10) {
        //The shape colour of the wall will change.
        wall.shapeColor = (0,255,0);
      }
      
    }