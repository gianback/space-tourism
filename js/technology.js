import { addSelected, obtenerDatos, validarAnimacion } from "./app.js";



//referencias HTML
const d = document;

const $nameTech = d.getElementById('name');
const $bioTech = d.getElementById('bio')
const $imgTech = d.getElementById('img-tech');

const btn1Tech = d.getElementById('btn-tech-1');
const btn2Tech = d.getElementById('btn-tech-2');
const btn3Tech = d.getElementById('btn-tech-3');
const btnsTech = d.querySelectorAll('button');




document.addEventListener('DOMContentLoaded', ()=> {
    return window.innerWidth >= 992 ? setPortrait() : setLandscape()
} )
window.addEventListener('resize', () => {
    return window.innerWidth >= 992 ? setPortrait() : setLandscape()
})

const setLandscape = () => {
    const imgTechSwap = d.getElementById('img-tech');
    imgTechSwap.src = imgTechSwap.src.replace('portrait','landscape')
}

const setPortrait = () => {
    const imgTechSwap = d.getElementById('img-tech');
    imgTechSwap.src = imgTechSwap.src.replace('landscape','portrait')

}

const buildTech = (position) => {
    obtenerDatos().then(data => {
        const {name, description, images} = data.technology[position];
        $nameTech.textContent = name;
        $bioTech.textContent = description;
        $imgTech.src = window.innerWidth >= 992 ? images.portrait : images.landscape;
    })
}
btn1Tech.addEventListener('click', () => {
    addSelected(btn1Tech,btnsTech,'btn-tech-selected')
    buildTech(0)
    validarAnimacion($nameTech,$bioTech,$imgTech)
})
btn2Tech.addEventListener('click', () => {
    addSelected(btn2Tech,btnsTech,'btn-tech-selected')
    buildTech(1)
    validarAnimacion($nameTech,$bioTech,$imgTech)
})
btn3Tech.addEventListener('click', () => {
    addSelected(btn3Tech,btnsTech,'btn-tech-selected')
    buildTech(2)
    validarAnimacion($nameTech,$bioTech,$imgTech)
})