window.cipher = {
  encode: (mensaje,desplazamiento) => {
    //Declara variable de resultado para retornarla al final de la fórmula
    let resultado= '';
    //Bucle que recorre el mensaje
    for (let i=0; i<mensaje.length; i++){
      //Cambio de letra a ascci
      let cambioascii= parseInt(mensaje[i].codePointAt());
      //Se aplica offset al mensaje ya numerado
      let numeroascii = (cambioascii - 65 + parseInt(desplazamiento))%26 + 65;
      //Concatena resultado y lo reconvierte a letras
      resultado += String.fromCodePoint(numeroascii);
    }
    return resultado;
  },
  decode: (mensaje2,desplazamiento2) => {
    let resultado2= '';
    for (let i=0; i<mensaje2.length; i++){
      let cambioascii2= parseInt(mensaje2[i].codePointAt());
      let numeroascii2 = (cambioascii2 - 65 - parseInt(desplazamiento2))%26 + 65;
      resultado2 += String.fromCodePoint(numeroascii2);
    }
    return resultado2;
  }
};
