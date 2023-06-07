function addBlock(target,content,position = 'beforebegin') {
  const elementTarget = document.querySelector(target);

  if (content instanceof HTMLElement){ //verifica si es un elemento Html (tag)
    elementTarget.insertAdjacentElement(position, content); //agrega elementos al DOM
  }else if(typeof content === 'string' && content.startsWith('<') && content.endsWith('>')){  //verifica si es código een cadena de texto
    elementTarget.insertAdjacentHTML(position, content); //agrega cadena de textos al DOM
  }else{
    console.error('Contenido valido: HTML en cadenas de texto o elementos HTML, Posiciones validas : afterbegin, afterend, beforebegin o beforeend');
  }
}

export default addBlock