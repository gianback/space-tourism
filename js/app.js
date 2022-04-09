
//traer datos del json  
export const obtenerDatos = async () => {
    try {
        const resp = await fetch('starter-code/data.json');
        const data = await resp.json()
       return data
        
    } catch (error) {
        return console.error('Mala conexion');
    }
    
    
} 

//btn Hamburguesa
const d = document;
const btnHamburguer = d.querySelector('#hamburguer');
const panel = d.querySelector('.panel');
const menuHamburguer = () => {
    panel.classList.toggle('active');
    if(panel.classList.contains('active')){
        btnHamburguer.src = 'starter-code/assets/shared/icon-close.svg'
    }else{
        btnHamburguer.src = 'starter-code/assets/shared/icon-hamburger.svg';
    }
    
}

//agregar y quitar animacion
export const validarAnimacion = (...html) => {
    [...html].forEach(nodo => {
            nodo.classList.remove('animacion');
            setTimeout(() => {
                    nodo.classList.add('animacion');
            }, 0);
    })
}

//limpiar y agregar selected
export const addSelected = (button,btnList,clase) => {
    btnList.forEach(btn => {
        if(btn.id === button.id){
            btn.classList.add(clase);
        }else{
            btn.classList.remove(clase);
        }
    })
}
//eventos
btnHamburguer.addEventListener('click', menuHamburguer)


