import { obtenerDatos, validarAnimacion } from "./app.js";

const d = document;
//referencias html


const btnMoon = d.getElementById('moon')
const btnMars = d.getElementById('mars')
const btnEuropa = d.getElementById('europa')
const btnTitan = d.getElementById('titan')


//elementos a cambiar de contenido

const $imgPlaneta = d.getElementById('img-destination');
const $name = d.getElementById('name')
const $description = d.getElementById('description');
const $distanceNumb = d.getElementById('distance-numb');
const $travelDays = d.getElementById('travel-days');
const $distanceAvg = d.getElementById('distance-avg')
const $travelTime = d.getElementById('travel-time')


const btns = d.querySelectorAll('button')



/*funciones*/
const limpiarSubrayado = () => {
    btns.forEach(btn => {
        btn.classList.add('no-selected')
    })
}
const construirDest = async (position) =>{
    obtenerDatos().then(data => {
        const {description, distance, images: {webp}, name, travel} = data.destinations[position];
        $imgPlaneta.src  = webp;
        $name.textContent  = name;
        $description.textContent  = description;
        $distanceNumb.textContent  = distance;
        $travelDays.textContent  =travel;
    })
    
   
}

const setImgPlanet = (img) => {
    img.classList.remove('img-animacion');
    setTimeout(() => {
    img.classList.add('img-animacion');
        
    }, 0);
}

//eventos
//destination
btnMoon.addEventListener('click', () => {
    limpiarSubrayado();
    btnMoon.classList.replace('no-selected','selected')
    validarAnimacion($name,$description,$distanceNumb,$travelDays,$distanceAvg,$travelTime);
    setImgPlanet($imgPlaneta)
    construirDest(0)
   
})
btnMars.addEventListener('click', () => {
    limpiarSubrayado();
    btnMars.classList.replace('no-selected','selected')
    validarAnimacion($name,$description,$distanceNumb,$travelDays,$distanceAvg,$travelTime);
    setImgPlanet($imgPlaneta)
    construirDest(1)
})

btnEuropa.addEventListener('click', ()=> {
    limpiarSubrayado();
    btnEuropa.classList.replace('no-selected','selected')
    validarAnimacion($name,$description,$distanceNumb,$travelDays,$distanceAvg,$travelTime);
    setImgPlanet($imgPlaneta);
    construirDest(2)
})

btnTitan.addEventListener('click', () => {
    limpiarSubrayado();
    btnTitan.classList.replace('no-selected','selected')
    validarAnimacion($name,$description,$distanceNumb,$travelDays,$distanceAvg,$travelTime);
    setImgPlanet($imgPlaneta);
    construirDest(3)
})
