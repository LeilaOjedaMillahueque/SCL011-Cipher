//Botón CREAR
//Declara la variable mostrartexto1
const mostrartexto1= document.getElementById('mostrartexto1');
//Llama y otorga función a la variable
mostrartexto1.addEventListener('click', ()=>{
    //Obtiene valor de la variable mensaje
    let mensaje= document.getElementById('texto1').value;
    //Obtiene valor de la variable desplazamienyo
    let desplazamiento= document.getElementById('region').value;
    //Obtiene el valor final y se comunica con cipher.js
    document.getElementById('mostrartextofinal1').innerHTML= window.cipher.encode(mensaje,desplazamiento);
});

//Botón LEER
const mostrartexto2= document.getElementById('mostrartexto2');
mostrartexto2.addEventListener('click', ()=>{
    let mensaje2= document.getElementById('texto2').value;
    let desplazamiento2= document.getElementById('region2').value;
    document.getElementById('mostrartextofinal2').innerHTML= window.cipher.decode(mensaje2,desplazamiento2);
});