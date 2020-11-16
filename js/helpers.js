

let getRandomNumbers = (size) => {
  return Math.floor(Math.random() * size);
};

let getDistance = (eventclick, target) => {
  let diffx = eventclick.offsetX - target.x;
  let diffy = eventclick.offsetY - target.y;
  return Math.sqrt(Math.pow(diffx, 2) + Math.pow(diffy, 2));
};

let getDistanceHint = (distance) => {
  if (distance < 20) {
    return "Boiling Hot";
  } else if (distance < 40) {
    return "Really Hot";
  } else if (distance < 80) {
    return "Hot";
  } else if (distance < 120) {
    return "Warm";
  } else if (distance < 280) {
    return "Cold";
  } else if (distance < 360) {
    return "Really Cold";
  } else {
    return "Freezing";
  }
};
