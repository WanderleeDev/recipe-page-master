import  { paragraph }  from "../../../../DB/recipe.js";

const Recipe = () => {

  const tempContainer =`
  <article class="instructionsContainer">
    <header class="instructionsContainer-header">
      <h2 class="instructionsContainer-title">Instructions</h2>
    </header>
    <ul class="listSteps">
      ${
        paragraph.map((p) => {
          const {stepNumber, description, textStrong} = p;

          console.log(textStrong);

          return(`
          <li class="listSteps-step">
            <span class="listSteps-index">${stepNumber}</span>
            <p class="listSteps-description">
            ${textStrong ? `<strong class="listSteps-bold">${textStrong}</strong>` : '' }
            ${description}
            </p>
          </li>
          `).trim()
        }).join('')
      }
    </ul>
    <p class="reference">
    <span class="reference-span">Source:</span>
    <a class="reference-link" rel="noopener noreferrer" href="https://sallysbakingaddiction.com/classic-cheesecake/">https://sallysbakingaddiction.com/classic-cheesecake/</a>
    </p>
  </article>
  `;

  return tempContainer
}

export default Recipe