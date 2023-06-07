import addBlock from "./assets/js/utils/addBlock.js";
import Header from "./assets/js/components/Header.js";
import Main from "./assets/js/components/Main.js";
import  Footer  from "./assets/js/components/Footer.js";

'use strict';
(() => {
  addBlock('.page',Header, 'afterbegin');
  addBlock('#app', Main(), 'beforeend');
  addBlock('#app', Footer(), 'afterend');
})();