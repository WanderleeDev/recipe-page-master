import  { card }  from "../../../../DB/recipe.js";

const Card = () => {

  const tagElement = `<div class="card">
    ${
      card.map((c)=>{
        const {title, img, content} = c;

        return(`
          <div class="card-item">
            <img loading="lazy" class="card-icon" src=${img} alt="${title}">
            <span class="card-indication">${title}</span>
            <span class="card-extraData">${content}</span>
          </div>
        `).trim();

      }).join('')
    }
  </div>`

  return(tagElement);
} 

export default Card;