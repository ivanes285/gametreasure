

let getRandomNumbers = (size) => {
  return Math.floor(Math.random() * size);
};

//obtiene la distancia con dos parametros el primero es el punto del click  y el target que
//se obtiene randomicamente 

let getDistance = (eventclick, target) => {
  let diffx = eventclick.offsetX - target.x;
  let diffy = eventclick.offsetY - target.y;
  return Math.sqrt(Math.pow(diffx, 2) + Math.pow(diffy, 2));
};



let getDistanceHint = (distance) => {
  if (distance < 40) {
    return "Boiling Hot(Hirviendo)";
  } else if (distance < 65) {
    return "Really Hot (Muy Caliente)";
  } else if (distance < 105) {
    return "Hot (Caliente)";
  } else if (distance < 165) {
    return "Warm (Calido)";
  } else if (distance < 225) {
    return "Cold (frío)";
  } else if (distance < 360) {
    return "Really Cold (Muy Frío)";
  }else if (distance < 420) {
      return "Frozen (Helado)";
  } else {
    return "Freezing (Congelado)";
  }
};
