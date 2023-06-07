import  { ingredients }  from "../../../../DB/recipe.js";

const listOne = ingredients[0].recipe1;
const listTwo = ingredients[1].recipe2;

const ListIngredients = () =>{
  const tempContainer = `
  <article class="recipe">
    <header>
      <h2 class="recipe-title">Ingredients</h2>
    </header>
    <div class="recipe-ingredients">
      <section class="recipe-list">
        <h3 class="list-subTitle">Graham Cracker Crust</h3>
        <ul class="list-ingredients">
        ${
          listOne.map((list) =>{
            const {id, item} = list;
            return(`
              <li class="list-item">
                <label class="list-label" for=${id}>
                  <input class="list-check" aria-label="Marcar ingrediente" type="checkbox" name=${id} id=${id}>
                  <p class="list-details">${item}<p>
                </label>
              </li>
            `).trim('');
            }).join('')
          }
        </ul>
      </section>
      <section class="recipe-list">
        <h3 class="list-subTitle">Cheesecake
        </h3>
        <ul class="list-ingredients">
        ${
          listTwo.map((list) =>{
            const {id, item} = list;
            return(`
              <li class="list-item">
                <label class="list-label" for=${id}>
                  <input class="list-check" aria-label="Marcar ingrediente" type="checkbox" name=${id} id=${id}>
                  <p class="list-details">${item}<p>
                </label>
              </li>
            `).trim('');
            }).join('')
          }
        </ul>
      </section>      
    </div>
  </article>
  `;

  return tempContainer;
}

export default ListIngredients