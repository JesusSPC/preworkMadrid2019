// Estas variables indicarán la orientación del rover.
var up = "up";
var down = "down";
var left = "left";
var right = "right";

// Nuestro objeto con sus coordenadas [0, 0] por defecto.
var rover = {
  direction: up,
  x: 0,
  y: 0,
  travelLog: []
}

// Cambia la orientación del rover hacia la izquierda.
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case up:
    rover.direction = left;
    break;
    case left:
    rover.direction = down;
    break;
    case down:
    rover.direction = right;
    break;
    case right:
    rover.direction = up;
    break;
  }
}

// Cambia la orientación del rover hacia la derecha.
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case up:
    rover.direction = right;
    break;
    case left:
    rover.direction = up;
    break;
    case down:
    rover.direction = left;
    break;
    case right:
    rover.direction = down;
    break;
  }
}

// Mueve al rover en la misma dirección en la que está mirando.
function moveForward(rover) {
  console.log("moveForward was called!");
  var prevX = rover.x;
  var prevY = rover.y;
  switch (rover.direction) {
    case up:
    rover.y--;
    break;
    case left:
    rover.x--;
    break;
    case down:
    rover.y++;
    break;
    case right:
    rover.x++;
    break;
  }

  // Si el rover se fuera a salir del tablero 10x10, vuelve a la coordenada anterior.
  if (rover.x < 0 || rover.x > 9) {
      rover.x = prevX;
      console.log('You can\'t go out of bounds! Returning to ' + "[" + rover.x + ", " + rover.y + "]");
    }

  if (rover.y < 0 || rover.y > 9) {
      rover.y = prevY;
      console.log('You can\'t go out of bounds! Returning to ' + "[" + rover.x + ", " + rover.y + "]");
  }

  // Empuja la posición anterior dentro del objeto, en la propiedad travelLog, e imprime la actual.
  var coordinate = "[" + prevX + ", " + prevY + "]";
  rover.travelLog.push(coordinate);

  console.log('the rover is now in ' + "[" + rover.x + ", " + rover.y + "]");
}

// Mueve al rover hacia atrás.
function moveBackwards(rover) {
  console.log("moveBackwards was called!");
  var prevX = rover.x;
  var prevY = rover.y;
  switch (rover.direction) {
    case up:
    rover.y++;
    break;
    case left:
    rover.x++;
    break;
    case down:
    rover.y--;
    break;
    case right:
    rover.x--;
    break;
  }

  // Si el rover se fuera a salir del tablero 10x10, vuelve a la coordenada anterior.
  if (rover.x < 0 || rover.x > 9) {
      rover.x = prevX;
      console.log('You can\'t go out of bounds! Returning to ' + "[" + rover.x + ", " + rover.y + "]");
    }

  if (rover.y < 0 || rover.y > 9) {
      rover.y = prevY;
      console.log('You can\'t go out of bounds! Returning to ' + "[" + rover.x + ", " + rover.y + "]");
  }

  // Empuja la posición anterior dentro del objeto, en la propiedad travelLog, e imprime la actual.
  var coordinate = "[" + prevX + ", " + prevY + "]";
  rover.travelLog.push(coordinate);

  console.log('the rover is now in ' + "[" + rover.x + ", " + rover.y + "]");
}

// Ejecuta las funciones anteriores por medio de una abreviación de comandos.
function commands(list, rover){
  for (i = 0; i < list.length; i++){
    switch (list[i]){
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackwards(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log('Wrong command! You can only use \'f\', \'b\', \'l\' or \'r\'.');
        break;
    }
  }
  console.log('Rover has been in these coordinates: ' + rover.travelLog);
}
