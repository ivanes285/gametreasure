const WIDTH=500;
const HEIGTH=500;

//puntos ejee Y y X en el plano y le damos randomico 
let target = {
    x: getRandomNumbers(WIDTH),
    y: getRandomNumbers(HEIGTH)
} 
console.log(target)

//Referenciamos a la imagen con el id
//El $ nos ayuda hacer referencia que es un elemento hmtl nada mas 

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks =0;

$map.addEventListener('click',(event)=>{
    clicks++;
    let distance = getDistance(event,target)
    $distance.innerHTML= `<h1> ${getDistanceHint(distance)} </h1>` 
    if(distance<30){
     alert(`You Have Found the Treasure 😄 in ${clicks} clicks `)
     location.reload() 
    }
   
})







