import addBlock from "../utils/addBlock.js";
import Description from "./Description/Description.js";
import Card from "./Card/Card.js";
import ListIngredients from "./ListIngredients/ListIngredients.js";
import Recipe from "./Recipe/Recipe.js";

const Main = () => {
  return(`
    ${Description}
    ${Card()}
    ${ListIngredients()}
    ${Recipe()}
  `).trim()
}

export default Main